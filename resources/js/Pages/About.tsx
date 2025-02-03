import React from 'react';
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
    <main className="pt-20">
      {/* Hero Section */}
      <div className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-semibold mb-6">About Oceania Airlines</h1>
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
                Founded in 1970, Oceania Airlines has been at the forefront of private aviation
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
                alt="Oceania Airlines History"
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

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Thompson',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'Sarah Chen',
                role: 'Chief Operations Officer',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'David Miller',
                role: 'Chief Safety Officer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-playfair text-navy mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}