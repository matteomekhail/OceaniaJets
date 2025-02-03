import React from 'react';
import { ChevronRight, Users, Plane, Calendar } from 'lucide-react';
import { Link } from '@inertiajs/react';
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-semibold mb-6">
            Experience Ultimate Sky Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Where Luxury Meets the Sky - Oceania Airlines
          </p>
          <Link href="/request-quote" className="btn-primary text-lg inline-flex items-center">
            Request Quote <ChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* Quick Quote Widget */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Plane className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                placeholder="Departure City"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-gold"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Plane className="h-5 w-5 text-white/70 rotate-90" />
              </div>
              <input
                type="text"
                placeholder="Destination City"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-gold"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-white/70" />
              </div>
              <select
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-gold appearance-none"
              >
                <option value="" className="text-navy">Number of Passengers</option>
                <option value="1-3" className="text-navy">1-3 Passengers</option>
                <option value="4-6" className="text-navy">4-6 Passengers</option>
                <option value="7-10" className="text-navy">7-10 Passengers</option>
                <option value="11+" className="text-navy">11+ Passengers</option>
              </select>
            </div>
            <Link 
              href="/request-quote" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              Get Quote <ChevronRight className="h-5 w-5" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}