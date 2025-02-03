import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-navy/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2 text-gold">
                <Plane className="h-8 w-8" />
                <span className="font-playfair text-xl font-semibold">Oceania Airlines</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/fleet" className="nav-link">Fleet</Link>
              <Link href="/destinations" className="nav-link">Destinations</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              <Link href="/request-quote" className="btn-primary">Request Quote</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy">
            <Link href="/" className="nav-link block px-3 py-2">Home</Link>
            <Link href="/fleet" className="nav-link block px-3 py-2">Fleet</Link>
            <Link href="/destinations" className="nav-link block px-3 py-2">Destinations</Link>
            <Link href="/about" className="nav-link block px-3 py-2">About</Link>
            <Link href="/contact" className="nav-link block px-3 py-2">Contact</Link>
            <Link href="/request-quote" className="btn-primary w-full mt-4">Request Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}