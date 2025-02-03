import React from 'react';
import { Shield, Award, Clock, Star, Users, Plane, MapPin, HeartHandshake } from 'lucide-react';
import Hero from '../Components/Hero';
import FleetPreview from '../Components/FleetPreview';
import Destinations from '../Components/Destinations';
import Testimonials from '../Components/Testimonials';

const services = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our fleet meets the highest safety standards with regular maintenance and experienced crew.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Ready to serve you anytime with our round-the-clock charter service.',
  },
  {
    icon: Users,
    title: 'Personal Concierge',
    description: 'Dedicated team to handle all your travel arrangements and special requests.',
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'Luxury amenities and personalized attention to every detail of your journey.',
  },
];

const stats = [
  { number: '50+', label: 'Private Jets' },
  { number: '100+', label: 'Destinations' },
  { number: '15K+', label: 'Flights Completed' },
  { number: '99.9%', label: 'Safety Rating' },
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose Oceania Airlines</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience unparalleled private aviation with our premium services and dedication to excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-gold mb-6" />
                <h3 className="text-xl font-playfair text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FleetPreview />
      
      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-playfair text-gold mb-2">{stat.number}</p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Destinations />

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience seamless private jet travel in four simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Plane,
                title: 'Select Aircraft',
                description: 'Choose from our fleet of luxury private jets.',
              },
              {
                icon: MapPin,
                title: 'Plan Route',
                description: 'Specify your departure and destination.',
              },
              {
                icon: HeartHandshake,
                title: 'Customize Experience',
                description: 'Tell us your preferences and requirements.',
              },
              {
                icon: Award,
                title: 'Enjoy Flight',
                description: 'Relax and experience luxury travel.',
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-block p-4 rounded-full bg-white shadow-md mb-6">
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-playfair text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gold/20">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gold"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-semibold mb-6">Ready to Experience Luxury Travel?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our exclusive clientele and elevate your travel experience with Oceania Airlines.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary">Request Quote</button>
            <button className="bg-transparent border-2 border-gold text-gold hover:bg-gold/10 px-6 py-3 rounded-md font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}