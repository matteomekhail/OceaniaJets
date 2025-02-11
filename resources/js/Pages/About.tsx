import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Shield, Award, HeartHandshake, Plane } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our commitment to safety is unwavering, with rigorous maintenance schedules and experienced crew.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from ground operations to in-flight experience.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Service',
    description: 'Every journey is tailored to your specific needs, ensuring a truly personalized experience.',
  },
  {
    icon: Plane,
    title: 'Innovation',
    description: 'We continuously invest in the latest aviation technology and luxury amenities.',
  },
];

export default function About() {
  return (
    <MainLayout>
      <Head title="About" />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-playfair font-semibold mb-6">About Oceania Jets</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Setting new standards in private aviation across the Pacific region since 1970.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1970, Oceania Jets has been at the forefront of private aviation
                  in the Pacific region for over five decades. What started as a small charter
                  service has grown into the region's premier private jet provider.
                </p>
                <p className="text-gray-600 mb-6">
                  Our commitment to excellence, safety, and personalized service has earned us
                  the trust of business leaders, celebrities, and discerning travelers who
                  demand the very best in private aviation.
                </p>
                <p className="text-gray-600">
                  Today, we operate a modern fleet of private jets, serving destinations
                  across the Pacific and beyond, while maintaining the same dedication to
                  exceptional service that has defined us from the beginning.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=800"
                  alt="Oceania Jets History"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <value.icon className="h-12 w-12 text-gold mb-6" />
                  <h3 className="text-xl font-playfair text-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}