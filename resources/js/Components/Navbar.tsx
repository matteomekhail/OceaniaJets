import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-50">
      {/* Header fisso */}
      <div className="bg-navy w-full">
        <div className="px-6 flex items-center justify-between h-16 md:h-24">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-3 text-gold">
              <Plane className="h-6 w-6 md:h-8 md:w-8" />
              <span className="font-playfair text-lg md:text-2xl">Oceania Jets</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="nav-link font-montserrat font-medium text-lg">Home</Link>
              <Link href="/fleet" className="nav-link font-montserrat font-medium text-lg">Fleet</Link>
              <Link href="/destinations" className="nav-link font-montserrat font-medium text-lg">Destinations</Link>
              <Link href="/about" className="nav-link font-montserrat font-medium text-lg">About</Link>
              <Link href="/contact" className="nav-link font-montserrat font-medium text-lg">Contact</Link>
              <Link href="/request-quote" className="btn-primary text-lg">Request Quote</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold transition-colors duration-300"
            >
              <div className="border-2 border-gold rounded-md p-1">
                {isOpen ? (
                  <X className="h-5 w-5 transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 transform rotate-0 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        className={`
          absolute top-16 left-0 right-0 md:hidden bg-navy min-h-screen
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div 
          className={`
            flex flex-col items-start px-8 pt-8
            transform transition-all duration-500 ease-in-out
            ${isOpen ? 'translate-y-0' : '-translate-y-8'}
          `}
        >
          {[
            { href: '/', text: 'Home' },
            { href: '/fleet', text: 'Fleet' },
            { href: '/destinations', text: 'Destinations' },
            { href: '/about', text: 'About' },
            { href: '/contact', text: 'Contact' }
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                nav-link font-montserrat font-medium text-lg mb-8 transform transition-all duration-300
                hover:translate-x-2
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}