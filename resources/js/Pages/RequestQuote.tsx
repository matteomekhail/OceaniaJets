import React, { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Plane, Users, Calendar, MapPin } from 'lucide-react';
import { router } from '@inertiajs/react';
import { toast } from 'react-hot-toast';
import AirportService from '@/services/AirportService';
import { Airport } from '@/data/airports';

const steps = [
  { title: 'Trip Details', icon: Plane },
  { title: 'Passengers', icon: Users },
  { title: 'Schedule', icon: Calendar },
  { title: 'Contact', icon: MapPin },
];

export default function RequestQuote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fromResults, setFromResults] = useState<Airport[]>([]);
  const [toResults, setToResults] = useState<Airport[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    tripType: 'One Way',
    from: '',
    to: '',
    fromAirport: null as Airport | null,
    toAirport: null as Airport | null,
    passengers: '',
    aircraftCategory: '',
    specialRequirements: '',
    departureDate: '',
    departureTime: '',
    returnDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalComments: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromDropdown(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'from' || name === 'to') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        [`${name}Airport`]: null
      }));

      // Aggiorna i risultati della ricerca
      if (name === 'from') {
        const results = AirportService.searchAirports(value);
        setFromResults(results);
        setShowFromDropdown(true);
      } else {
        const results = AirportService.searchAirports(value);
        setToResults(results);
        setShowToDropdown(true);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSelectAirport = (airport: Airport, type: 'from' | 'to') => {
    setFormData(prev => ({
      ...prev,
      [type]: AirportService.formatAirportDisplay(airport),
      [`${type}Airport`]: airport
    }));
    
    if (type === 'from') {
      setShowFromDropdown(false);
    } else {
      setShowToDropdown(false);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Trip Details
        if (!formData.from) newErrors.from = 'Departure location is required';
        else if (formData.from.length < 3) newErrors.from = 'Departure location must be at least 3 characters';
        
        if (!formData.to) newErrors.to = 'Destination location is required';
        else if (formData.to.length < 3) newErrors.to = 'Destination location must be at least 3 characters';
        break;

      case 1: // Passenger Information
        if (!formData.passengers) newErrors.passengers = 'Number of passengers is required';
        if (!formData.aircraftCategory) newErrors.aircraftCategory = 'Please select an aircraft category';
        break;

      case 2: // Schedule
        if (!formData.departureDate) {
          newErrors.departureDate = 'Departure date is required';
        } else {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const departureDate = new Date(formData.departureDate);
          if (departureDate < today) {
            newErrors.departureDate = 'Departure date must be today or later';
          }
        }

        if (!formData.departureTime) {
          newErrors.departureTime = 'Departure time is required';
        }

        if (formData.tripType === 'Round Trip') {
          if (!formData.returnDate) {
            newErrors.returnDate = 'Return date is required for round trips';
          } else if (formData.departureDate) {
            const departureDate = new Date(formData.departureDate);
            const returnDate = new Date(formData.returnDate);
            if (returnDate < departureDate) {
              newErrors.returnDate = 'Return date must be after departure date';
            }
          }
        }
        break;

      case 3: // Contact Information
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        else if (formData.firstName.length < 2) newErrors.firstName = 'First name must be at least 2 characters';
        
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        else if (formData.lastName.length < 2) newErrors.lastName = 'Last name must be at least 2 characters';
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        else if (formData.phone.length < 8) newErrors.phone = 'Phone number must be at least 8 characters';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
    } else {
      toast.error('Please fix the errors before proceeding');
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (!validateStep(currentStep)) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    setIsSubmitting(true);

    // Prepara i dati per l'invio, escludendo gli oggetti Airport completi
    const submitData = {
      ...formData,
      from: formData.from,
      to: formData.to,
      fromIata: formData.fromAirport?.iata || '',
      toIata: formData.toAirport?.iata || '',
      // Rimuoviamo gli oggetti Airport completi
      fromAirport: undefined,
      toAirport: undefined
    };

    router.post('/quote-request', submitData, {
      onSuccess: () => {
        toast.success('Quote request sent successfully! We will contact you soon.');
        setIsSubmitting(false);
        // Reset form
        setFormData({
          tripType: 'One Way',
          from: '',
          to: '',
          fromAirport: null,
          toAirport: null,
          passengers: '',
          aircraftCategory: '',
          specialRequirements: '',
          departureDate: '',
          departureTime: '',
          returnDate: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          additionalComments: '',
        });
        setCurrentStep(0);
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors as Record<string, string>);
        toast.error('Failed to send quote request. Please check the form for errors.');
        setIsSubmitting(false);
      }
    });
  };

  return (
    <MainLayout>
      <Head title="Request Quote" />
      <main className="pt-20">
        {/* Quote Header */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-playfair font-semibold mb-6">Request a Quote</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Let us help you plan your perfect private jet experience.
            </p>
          </div>
        </div>

        {/* Quote Form */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center ${
                      index <= currentStep ? 'text-gold' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        index <= currentStep ? 'bg-gold text-white' : 'bg-gray-200'
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-4">
                <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-200"></div>
                <div
                  className="absolute left-0 top-1/2 h-0.5 bg-gold transition-all duration-300"
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Steps */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair text-navy mb-6">Trip Details</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trip Type
                    </label>
                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    >
                      <option>One Way</option>
                      <option>Round Trip</option>
                    </select>
                  </div>
                  <div ref={fromRef} className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Airport
                    </label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleInputChange}
                      placeholder="Search by city, airport name or code"
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.from ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.from && (
                      <p className="text-red-500 text-sm mt-1">{errors.from}</p>
                    )}
                    {showFromDropdown && fromResults.length > 0 && (
                      <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                        <ul className="py-1 max-h-60 overflow-auto">
                          {fromResults.map((airport) => (
                            <li
                              key={airport.id}
                              onClick={() => handleSelectAirport(airport, 'from')}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <div className="font-medium">{airport.city} ({airport.iata})</div>
                              <div className="text-sm text-gray-600">{airport.name}</div>
                              <div className="text-xs text-gray-500">{airport.country}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div ref={toRef} className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination Airport
                    </label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      placeholder="Search by city, airport name or code"
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.to ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.to && (
                      <p className="text-red-500 text-sm mt-1">{errors.to}</p>
                    )}
                    {showToDropdown && toResults.length > 0 && (
                      <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                        <ul className="py-1 max-h-60 overflow-auto">
                          {toResults.map((airport) => (
                            <li
                              key={airport.id}
                              onClick={() => handleSelectAirport(airport, 'to')}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <div className="font-medium">{airport.city} ({airport.iata})</div>
                              <div className="text-sm text-gray-600">{airport.name}</div>
                              <div className="text-xs text-gray-500">{airport.country}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair text-navy mb-6">Passenger Information</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Passengers
                    </label>
                    <input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      min="1"
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.passengers ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.passengers && (
                      <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Aircraft Category
                    </label>
                    <select
                      name="aircraftCategory"
                      value={formData.aircraftCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    >
                      <option value="">Select Category</option>
                      <option>Light Jet</option>
                      <option>Midsize Jet</option>
                      <option>Heavy Jet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                      placeholder="Catering preferences, special assistance, etc."
                    ></textarea>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair text-navy mb-6">Schedule</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.departureDate ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.departureDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Time
                    </label>
                    <input
                      type="time"
                      name="departureTime"
                      value={formData.departureTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  {formData.tripType === 'Round Trip' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Return Date
                      </label>
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.returnDate ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:border-gold`}
                      />
                      {errors.returnDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair text-navy mb-6">Contact Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:border-gold`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:border-gold`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gold`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-navy text-white hover:bg-navy/90'
                  }`}
                  disabled={currentStep === 0}
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (currentStep === steps.length - 1) {
                      handleSubmit();
                    } else {
                      handleNext();
                    }
                  }}
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === steps.length - 1 ? (
                    isSubmitting ? 'Submitting...' : 'Submit Request'
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}