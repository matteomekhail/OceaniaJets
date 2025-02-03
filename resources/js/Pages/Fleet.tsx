import React from 'react';
import { Shield, Users, Gauge, Clock } from 'lucide-react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const fleetCategories = [
  {
    name: 'Light Jets',
    models: [
      {
        name: 'Citation CJ4',
        image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800',
        specs: {
          passengers: 7,
          range: '2,165 nm',
          speed: '451 knots',
          height: '4.8 ft',
        },
        description: 'Perfect for short to medium-range trips, offering exceptional comfort and efficiency.',
        amenities: ['WiFi Connectivity', 'Leather Seats', 'Refreshment Center', 'Private Lavatory'],
      },
      {
        name: 'Phenom 300',
        image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=800',
        specs: {
          passengers: 8,
          range: '2,010 nm',
          speed: '453 knots',
          height: '4.9 ft',
        },
        description: 'Best-in-class performance with superior comfort and innovative technology.',
        amenities: ['Entertainment System', 'Refreshment Center', 'Large Windows', 'Baggage Compartment'],
      },
    ],
  },
  {
    name: 'Midsize Jets',
    models: [
      {
        name: 'Citation XLS+',
        image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800',
        specs: {
          passengers: 9,
          range: '2,100 nm',
          speed: '441 knots',
          height: '5.7 ft',
        },
        description: 'The perfect combination of comfort, performance, and reliability.',
        amenities: ['Full Refreshment Center', 'Private Lavatory', 'Spacious Cabin', 'Executive Seating'],
      },
    ],
  },
  {
    name: 'Heavy Jets',
    models: [
      {
        name: 'Gulfstream G650',
        image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=800',
        specs: {
          passengers: 14,
          range: '7,000 nm',
          speed: '516 knots',
          height: '6.2 ft',
        },
        description: 'Ultimate luxury for long-range travel with exceptional comfort and space.',
        amenities: ['Master Suite', 'Full Galley', 'Multiple Living Areas', 'Satellite Communications'],
      },
    ],
  },
];

export default function Fleet() {
  return (
    <MainLayout>
      <Head title="Fleet" />
      <main className="pt-20">
        {/* Fleet Header */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-playfair font-semibold mb-6">Our Exclusive Fleet</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Experience unparalleled luxury with our meticulously maintained fleet of private jets,
              each offering the perfect blend of comfort, performance, and style.
            </p>
          </div>
        </div>

        {/* Fleet Categories */}
        {fleetCategories.map((category, index) => (
          <section key={index} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="section-title mb-12">{category.name}</h2>
              
              {category.models.map((model, modelIndex) => (
                <div key={modelIndex} className="mb-20 last:mb-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="text-3xl font-playfair text-navy mb-4">{model.name}</h3>
                      <p className="text-gray-600 mb-8">{model.description}</p>

                      {/* Specifications */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-gold" />
                          <div>
                            <p className="text-sm text-gray-500">Passengers</p>
                            <p className="font-semibold">{model.specs.passengers}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Gauge className="h-5 w-5 text-gold" />
                          <div>
                            <p className="text-sm text-gray-500">Speed</p>
                            <p className="font-semibold">{model.specs.speed}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-gold" />
                          <div>
                            <p className="text-sm text-gray-500">Range</p>
                            <p className="font-semibold">{model.specs.range}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-gold" />
                          <div>
                            <p className="text-sm text-gray-500">Height</p>
                            <p className="font-semibold">{model.specs.height}</p>
                          </div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Amenities</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {model.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <span className="w-2 h-2 bg-gold rounded-full"></span>
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="btn-primary mt-8">Request Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </MainLayout>
  );
}