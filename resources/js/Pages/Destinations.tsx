import React from 'react';
import { MapPin, Plane, Calendar, Shield } from 'lucide-react';

const destinations = [
  {
    name: 'Bora Bora',
    image: 'https://images.unsplash.com/photo-1589179447852-768772012adc?auto=format&fit=crop&q=80&w=800',
    description: 'Experience paradise in the South Pacific with crystal clear waters and luxurious overwater bungalows.',
    flightTime: '8 hours',
    bestSeason: 'May to October',
    highlights: ['Private Beach Access', 'Luxury Resorts', 'Water Activities', 'Scenic Flights'],
  },
  {
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800',
    description: 'Discover the vibrant culture and iconic landmarks of Australia\'s premier city.',
    flightTime: '3 hours',
    bestSeason: 'December to February',
    highlights: ['Opera House', 'Harbour Bridge', 'Coastal Beaches', 'Fine Dining'],
  },
  {
    name: 'Auckland',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800',
    description: 'New Zealand\'s largest city offers a perfect blend of urban sophistication and natural beauty.',
    flightTime: '4 hours',
    bestSeason: 'March to May',
    highlights: ['Sky Tower', 'Waiheke Island', 'Yacht Tours', 'Wine Tasting'],
  },
  {
    name: 'Fiji',
    image: 'https://images.unsplash.com/photo-1589179447852-768772012adc?auto=format&fit=crop&q=80&w=800',
    description: 'Escape to a tropical paradise of pristine beaches and world-class resorts.',
    flightTime: '5 hours',
    bestSeason: 'July to September',
    highlights: ['Private Islands', 'Coral Reefs', 'Spa Retreats', 'Cultural Tours'],
  },
  {
    name: 'Great Barrier Reef',
    image: 'https://images.unsplash.com/photo-1582067294834-67e14d10a9f6?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the world\'s largest coral reef system from a unique perspective.',
    flightTime: '4 hours',
    bestSeason: 'June to October',
    highlights: ['Scenic Flights', 'Luxury Resorts', 'Diving', 'Island Hopping'],
  },
  {
    name: 'Queenstown',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80&w=800',
    description: 'New Zealand\'s adventure capital surrounded by breathtaking alpine scenery.',
    flightTime: '4.5 hours',
    bestSeason: 'June to August',
    highlights: ['Ski Resorts', 'Wine Tours', 'Golf Courses', 'Lake Activities'],
  },
];

const features = [
  {
    icon: Plane,
    title: 'Direct Flights',
    description: 'Skip the connections with our direct private jet service to all destinations.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Travel on your terms with 24/7 departure availability.',
  },
  {
    icon: Shield,
    title: 'Safe Travel',
    description: 'Experience worry-free travel with our highest safety standards.',
  },
  {
    icon: MapPin,
    title: 'Custom Routes',
    description: 'Create your perfect itinerary with multiple destinations.',
  },
];

export default function Destinations() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-semibold mb-6">Luxury Destinations</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover the most exclusive destinations across Oceania and beyond,
            accessible only through our premium private jet service.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-gold mb-6" />
                <h3 className="text-xl font-playfair text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent">
                    <div className="absolute bottom-0 p-6 w-full">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <MapPin className="h-5 w-5 text-gold" />
                        <h3 className="text-xl font-playfair">{destination.name}</h3>
                      </div>
                      <p className="text-white/90 mb-4">{destination.description}</p>
                      <div className="space-y-2">
                        <p className="text-white/80 flex items-center gap-2">
                          <Plane className="h-4 w-4 text-gold" />
                          Flight Time: {destination.flightTime}
                        </p>
                        <p className="text-white/80 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gold" />
                          Best Season: {destination.bestSeason}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="text-sm bg-white/10 text-white/90 px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-semibold mb-6">Ready to Experience Luxury Travel?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let us create your perfect journey to any of these stunning destinations.
            Our travel specialists are ready to craft your bespoke experience.
          </p>
          <button className="btn-primary">Request Quote</button>
        </div>
      </section>
    </main>
  );
}