import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Bora Bora',
    image: 'https://images.unsplash.com/photo-1589179447852-768772012adc?auto=format&fit=crop&q=80&w=800',
    description: 'Paradise in the South Pacific',
  },
  {
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800',
    description: 'Australia\'s Iconic Harbor City',
  },
  {
    name: 'Auckland',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800',
    description: 'Gateway to New Zealand',
  },
  {
    name: 'Fiji',
    image: 'https://images.unsplash.com/photo-1589179447852-768772012adc?auto=format&fit=crop&q=80&w=800',
    description: 'Tropical Paradise Islands',
  },
];

export default function Destinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Popular Destinations</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our most sought-after destinations across Oceania,
          each offering unique experiences and unforgettable memories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-xl font-playfair">{destination.name}</h3>
                  </div>
                  <p className="text-white/90">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}