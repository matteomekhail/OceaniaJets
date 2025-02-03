import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Plane, Users, Calendar, MapPin } from 'lucide-react';

const steps = [
  { title: 'Trip Details', icon: Plane },
  { title: 'Passengers', icon: Users },
  { title: 'Schedule', icon: Calendar },
  { title: 'Contact', icon: MapPin },
];

export default function RequestQuote() {
  const [currentStep, setCurrentStep] = useState(0);

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
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold">
                      <option>One Way</option>
                      <option>Round Trip</option>
                      <option>Multi-City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
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
                      min="1"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Aircraft Category
                    </label>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold">
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
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date (if applicable)
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
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
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <textarea
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
                      // Submit form
                      console.log('Submit form');
                    } else {
                      setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                    }
                  }}
                  className="btn-primary"
                >
                  {currentStep === steps.length - 1 ? 'Submit Request' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}