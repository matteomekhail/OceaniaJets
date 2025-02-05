import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Plane, Users } from 'lucide-react';
import { router } from '@inertiajs/react';
import { toast } from 'react-hot-toast';

interface Airport {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
}

// Dataset statico degli aeroporti principali
const airports: Airport[] = [
  { id: "1", code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA" },
  { id: "2", code: "LHR", name: "London Heathrow Airport", city: "London", country: "UK" },
  { id: "3", code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { id: "4", code: "FCO", name: "Leonardo da Vinci International Airport", city: "Rome", country: "Italy" },
  { id: "5", code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "UAE" },
  { id: "6", code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { id: "7", code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  { id: "8", code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA" },
  { id: "9", code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy" },
  { id: "10", code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
];

const Hero: React.FC = () => {
  const [fromQuery, setFromQuery] = useState<string>('');
  const [toQuery, setToQuery] = useState<string>('');
  const [fromResults, setFromResults] = useState<Airport[]>([]);
  const [toResults, setToResults] = useState<Airport[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState<boolean>(false);
  const [showToDropdown, setShowToDropdown] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromDropdown(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAirports = (query: string): Airport[] => {
    const searchTerm = query.toLowerCase();
    return airports.filter(airport => 
      airport.city.toLowerCase().includes(searchTerm) ||
      airport.code.toLowerCase().includes(searchTerm) ||
      airport.name.toLowerCase().includes(searchTerm)
    ).slice(0, 5);
  };

  useEffect(() => {
    if (fromQuery) {
      setFromResults(searchAirports(fromQuery));
    } else {
      setFromResults([]);
    }
  }, [fromQuery]);

  useEffect(() => {
    if (toQuery) {
      setToResults(searchAirports(toQuery));
    } else {
      setToResults([]);
    }
  }, [toQuery]);

  const handleSelectAirport = (airport: Airport, type: 'from' | 'to'): void => {
    if (type === 'from') {
      setFromQuery(`${airport.city} (${airport.code})`);
      setShowFromDropdown(false);
    } else {
      setToQuery(`${airport.city} (${airport.code})`);
      setShowToDropdown(false);
    }
  };

  const renderAirportDropdown = (results: Airport[], type: 'from' | 'to'): React.ReactNode => {
    if (!results.length) return null;

    return (
      <div className="absolute z-50 w-full top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200">
        <ul className="max-h-60 overflow-auto">
          {results.map((airport) => (
            <li
              key={airport.id}
              onClick={() => handleSelectAirport(airport, type)}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center">
                <div>
                  <div className="font-medium text-navy">
                    {airport.city} ({airport.code})
                  </div>
                  <div className="text-sm text-gray-500">
                    {airport.name}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'from' | 'to'
  ): void => {
    const value = e.target.value;
    if (type === 'from') {
      setFromQuery(value);
      setShowFromDropdown(true);
    } else {
      setToQuery(value);
      setShowToDropdown(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromQuery || !toQuery || !passengers) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    router.post('/quote-request', {
      from: fromQuery,
      to: toQuery,
      passengers: passengers,
    }, {
      onSuccess: () => {
        toast.success('Quote request sent successfully! We will contact you soon.');
        // Reset form
        setFromQuery('');
        setToQuery('');
        setPassengers('');
        setIsLoading(false);
      },
      onError: () => {
        toast.error('Failed to send quote request. Please try again.');
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 37, 69, 0.65), rgba(11, 37, 69, 0.65)), url('https://images.unsplash.com/photo-1619659085779-29fcc0e41110?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white leading-tight mb-6">
              <span className="block">Experience</span>
              <span className="block text-gold">
                Ultimate Sky Luxury
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-montserrat mb-8">
              Where Luxury Meets the Sky - Oceania Airlines
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button 
                type="button"
                className="group px-8 py-4 bg-gold hover:bg-gold/90 text-navy font-montserrat font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-gold/20 flex items-center gap-2"
              >
                Book Your Flight 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                type="button"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-montserrat font-semibold rounded-full backdrop-blur-sm transition-all border border-white/20"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-navy/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6" onSubmit={handleSubmit}>
              <div className="relative group" ref={fromRef}>
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Plane className="h-5 w-5 text-gold transition-colors" />
                </div>
                <input
                  type="text"
                  value={fromQuery}
                  onChange={(e) => handleInputChange(e, 'from')}
                  onFocus={() => setShowFromDropdown(true)}
                  placeholder="From"
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 text-white placeholder-white/70 border-2 border-transparent focus:border-gold/50 transition-all outline-none group-hover:bg-white/20 font-montserrat"
                  required
                />
                {showFromDropdown && renderAirportDropdown(fromResults, 'from')}
              </div>

              <div className="relative group" ref={toRef}>
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Plane className="h-5 w-5 text-gold rotate-90 transition-colors" />
                </div>
                <input
                  type="text"
                  value={toQuery}
                  onChange={(e) => handleInputChange(e, 'to')}
                  onFocus={() => setShowToDropdown(true)}
                  placeholder="To"
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 text-white placeholder-white/70 border-2 border-transparent focus:border-gold/50 transition-all outline-none group-hover:bg-white/20 font-montserrat"
                  required
                />
                {showToDropdown && renderAirportDropdown(toResults, 'to')}
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gold transition-colors" />
                </div>
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 text-white placeholder-white/70 border-2 border-transparent focus:border-gold/50 transition-all outline-none appearance-none group-hover:bg-white/20 font-montserrat"
                  required
                >
                  <option value="">Select Passengers</option>
                  <option value="1-3">1-3 Passengers</option>
                  <option value="4-6">4-6 Passengers</option>
                  <option value="7-10">7-10 Passengers</option>
                  <option value="11+">11+ Passengers</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="group bg-gold hover:bg-gold/90 text-navy font-montserrat font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Get Instant Quote 
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;