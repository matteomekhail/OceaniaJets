import React from 'react';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <Plane className="h-8 w-8" />
              <span className="font-playfair text-xl font-semibold">Oceania Jets</span>
            </div>
            <p className="text-white/80">
              Where Luxury Meets the Sky - Experience ultimate private aviation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold">Our Fleet</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold">Destinations</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gold" />
                <span>contact@oceania-airlines.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Sydney, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Oceania Jets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}