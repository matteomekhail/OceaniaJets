import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Plane, Users } from 'lucide-react';
import { router, Link } from '@inertiajs/react';
import { toast } from 'react-hot-toast';
import AirportService from '@/services/AirportService';
import { Airport } from '@/data/airports';

const Hero: React.FC = () => {
  const [fromQuery, setFromQuery] = useState<string>('');
  const [toQuery, setToQuery] = useState<string>('');
  const [fromResults, setFromResults] = useState<Airport[]>([]);
  const [toResults, setToResults] = useState<Airport[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState<boolean>(false);
  const [showToDropdown, setShowToDropdown] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedFromAirport, setSelectedFromAirport] = useState<Airport | null>(null);
  const [selectedToAirport, setSelectedToAirport] = useState<Airport | null>(null);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'from' | 'to'): void => {
    const value = e.target.value;
    if (type === 'from') {
      setFromQuery(value);
      setSelectedFromAirport(null);
      const results = AirportService.searchAirports(value);
      setFromResults(results);
      setShowFromDropdown(true);
    } else {
      setToQuery(value);
      setSelectedToAirport(null);
      const results = AirportService.searchAirports(value);
      setToResults(results);
      setShowToDropdown(true);
    }
  };

  const handleSelectAirport = (airport: Airport, type: 'from' | 'to'): void => {
    if (type === 'from') {
      setFromQuery(AirportService.formatAirportDisplay(airport));
      setSelectedFromAirport(airport);
      setShowFromDropdown(false);
    } else {
      setToQuery(AirportService.formatAirportDisplay(airport));
      setSelectedToAirport(airport);
      setShowToDropdown(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedFromAirport) {
      newErrors.from = 'Please select a departure airport';
    }

    if (!selectedToAirport) {
      newErrors.to = 'Please select a destination airport';
    }

    if (!passengers) {
      newErrors.passengers = 'Number of passengers is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly');
      return;
    }

    setIsLoading(true);

    router.post('/quote-request', {
      from: fromQuery,
      to: toQuery,
      fromIata: selectedFromAirport?.iata || '',
      toIata: selectedToAirport?.iata || '',
      passengers: passengers,
    }, {
      onSuccess: () => {
        toast.success('Quote request sent successfully! We will contact you soon.');
        // Reset form
        setFromQuery('');
        setToQuery('');
        setPassengers('');
        setSelectedFromAirport(null);
        setSelectedToAirport(null);
        setErrors({});
        setIsLoading(false);
      },
      onError: (errors) => {
        setErrors(errors as Record<string, string>);
        toast.error('Failed to send quote request. Please check the form for errors.');
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074"
          alt="Private Jet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair text-white font-semibold leading-tight">
            Luxury Private Jet Charter
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Experience the ultimate in private aviation with our premium fleet and personalized service.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 animate-slide-up">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group" ref={fromRef}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Plane className="h-5 w-5 text-white/70 group-hover:text-gold transition-all duration-300 ease-out" />
                  </div>
                  <input
                    type="text"
                    value={fromQuery}
                    onChange={(e) => handleInputChange(e, 'from')}
                    onFocus={() => setShowFromDropdown(true)}
                    placeholder="From"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 text-white placeholder-white/60 border-b-2 ${
                      errors.from ? 'border-red-500' : 'border-transparent'
                    } focus:border-gold transition-all duration-300 outline-none font-montserrat rounded-lg backdrop-blur-sm hover:bg-white/20`}
                  />
                  {showFromDropdown && fromResults.length > 0 && (
                    <div className="absolute z-50 w-full mt-2 bg-navy/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 animate-fade-in">
                      <ul className="max-h-60 overflow-auto">
                        {fromResults.map((airport) => (
                          <li
                            key={airport.id}
                            onClick={() => handleSelectAirport(airport, 'from')}
                            className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-200"
                          >
                            <div className="font-medium text-white">{airport.city} ({airport.iata})</div>
                            <div className="text-sm text-white/70">{airport.name}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative group" ref={toRef}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Plane className="h-5 w-5 text-white/70 group-hover:text-gold transition-all duration-300 ease-out rotate-90" />
                  </div>
                  <input
                    type="text"
                    value={toQuery}
                    onChange={(e) => handleInputChange(e, 'to')}
                    onFocus={() => setShowToDropdown(true)}
                    placeholder="To"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 text-white placeholder-white/60 border-b-2 ${
                      errors.to ? 'border-red-500' : 'border-transparent'
                    } focus:border-gold transition-all duration-300 outline-none font-montserrat rounded-lg backdrop-blur-sm hover:bg-white/20`}
                  />
                  {showToDropdown && toResults.length > 0 && (
                    <div className="absolute z-50 w-full mt-2 bg-navy/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 animate-fade-in">
                      <ul className="max-h-60 overflow-auto">
                        {toResults.map((airport) => (
                          <li
                            key={airport.id}
                            onClick={() => handleSelectAirport(airport, 'to')}
                            className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-200"
                          >
                            <div className="font-medium text-white">{airport.city} ({airport.iata})</div>
                            <div className="text-sm text-white/70">{airport.name}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-white/70 group-hover:text-gold transition-all duration-300 ease-out" />
                  </div>
                  <select 
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 text-white placeholder-white/60 border-b-2 ${
                      errors.passengers ? 'border-red-500' : 'border-transparent'
                    } focus:border-gold transition-all duration-300 outline-none appearance-none font-montserrat rounded-lg backdrop-blur-sm hover:bg-white/20`}
                  >
                    <option value="" className="bg-navy text-white">Select Passengers</option>
                    <option value="1-3" className="bg-navy text-white">1-3 Passengers</option>
                    <option value="4-6" className="bg-navy text-white">4-6 Passengers</option>
                    <option value="7-10" className="bg-navy text-white">7-10 Passengers</option>
                    <option value="11+" className="bg-navy text-white">11+ Passengers</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="relative group overflow-hidden bg-gold text-navy font-montserrat font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/30 flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-all duration-300">
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        Get Instant Quote 
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-red-400">
                {errors.from && <p>{errors.from}</p>}
                {errors.to && <p>{errors.to}</p>}
                {errors.passengers && <p>{errors.passengers}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;