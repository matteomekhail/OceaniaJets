import React from 'react';
import { Link, router } from '@inertiajs/react';

const fleetData = [
  {
    category: 'Light Jets',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800',
    description: 'Perfect for short trips, accommodating up to 7 passengers',
  },
  {
    category: 'Midsize Jets',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=800',
    description: 'Ideal for medium-range flights with up to 9 passengers',
  },
  {
    category: 'Heavy Jets',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious comfort for long-haul flights with up to 14 passengers',
  },
];

export default function FleetPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Exclusive Fleet</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience unparalleled comfort and style with our diverse fleet of private jets,
          each meticulously maintained to ensure the highest standards of safety and luxury.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetData.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-playfair text-white mb-2">{item.category}</h3>
                <p className="text-white/90 mb-4">{item.description}</p>
                <button
                  onClick={() => router.visit('/request-quote', {
                    data: { jetCategory: item.category }
                  })}
                  className="text-gold hover:text-white transition-colors duration-300 inline-block cursor-pointer"
                >
                  Request Quote →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}