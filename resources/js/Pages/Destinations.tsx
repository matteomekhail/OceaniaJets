import React from 'react';
import { MapPin, Plane, Calendar, Shield } from 'lucide-react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const destinations = [
  {
    name: 'Bora Bora',
    image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1575000898743-9128b75a89b7?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Escape to a tropical paradise of pristine beaches and world-class resorts.',
    flightTime: '5 hours',
    bestSeason: 'July to September',
    highlights: ['Private Islands', 'Coral Reefs', 'Spa Retreats', 'Cultural Tours'],
  },
  {
    name: 'Great Barrier Reef',
    image: 'https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <MainLayout>
      <Head title="Destinations" />
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
            <h2 className="text-4xl font-playfair font-semibold text-center mb-16">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="group relative bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg overflow-hidden">
                  <div className="relative h-[400px] w-full">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                          <MapPin className="h-3 w-3 text-gold" />
                        </div>
                        <h3 className="text-2xl font-playfair text-white">{destination.name}</h3>
                      </div>

                      {/* Description */}
                      <div className="space-y-6">
                        <p className="text-white/90 text-lg leading-relaxed">
                          {destination.description}
                        </p>

                        {/* Flight Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-white/80">
                            <Plane className="h-4 w-4 text-gold" />
                            <span className="text-sm">Flight Time: {destination.flightTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Calendar className="h-4 w-4 text-gold" />
                            <span className="text-sm">Best Season: {destination.bestSeason}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90"
                            >
                              {highlight}
                            </span>
                          ))}
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
    </MainLayout>
  );
}