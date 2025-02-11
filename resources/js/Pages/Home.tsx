import React from 'react';
import { Shield, Award, Clock, Star, Users, Plane, MapPin, HeartHandshake, LucideIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import Hero from '../Components/Hero';
import FleetPreview from '../Components/FleetPreview';
import Destinations from '../Components/Destinations';
import Testimonials from '../Components/Testimonials';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FormOption {
  value: string;
  label: string;
}

interface ClassicFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  className?: string;
}

interface ClassicFormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: FormOption[];
  className?: string;
}

interface ClassicFormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

const services: Service[] = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our fleet meets the highest safety standards with regular maintenance and experienced crew.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Ready to serve you anytime with our round-the-clock charter service.',
  },
  {
    icon: Users,
    title: 'Personal Concierge',
    description: 'Dedicated team to handle all your travel arrangements and special requests.',
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'Luxury amenities and personalized attention to every detail of your journey.',
  },
];

const stats: Stat[] = [
  { number: '50+', label: 'Private Jets' },
  { number: '100+', label: 'Destinations' },
  { number: '15K+', label: 'Flights Completed' },
  { number: '99.9%', label: 'Safety Rating' },
];

const processSteps: ProcessStep[] = [
  {
    icon: Plane,
    title: 'Select Aircraft',
    description: 'Choose from our fleet of luxury private jets.',
  },
  {
    icon: MapPin,
    title: 'Plan Route',
    description: 'Specify your departure and destination.',
  },
  {
    icon: HeartHandshake,
    title: 'Customize Experience',
    description: 'Tell us your preferences and requirements.',
  },
  {
    icon: Award,
    title: 'Enjoy Flight',
    description: 'Relax and experience luxury travel.',
  },
];

const ClassicFormInput: React.FC<ClassicFormInputProps> = ({ 
  label, 
  type = 'text', 
  className = '', 
  ...props 
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      className={`
        w-full
        px-4
        py-3
        bg-white
        border
        border-gray-300
        rounded-md
        shadow-sm
        text-gray-900
        transition-colors
        duration-200
        ease-in-out
        focus:border-navy
        focus:ring-2
        focus:ring-navy
        focus:ring-opacity-20
        focus:outline-none
        placeholder-gray-400
        ${className}
      `}
      {...props}
    />
  </div>
);

const ClassicFormSelect: React.FC<ClassicFormSelectProps> = ({ 
  label, 
  options, 
  className = '', 
  ...props 
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      className={`
        w-full
        px-4
        py-3
        bg-white
        border
        border-gray-300
        rounded-md
        shadow-sm
        text-gray-900
        transition-colors
        duration-200
        ease-in-out
        focus:border-navy
        focus:ring-2
        focus:ring-navy
        focus:ring-opacity-20
        focus:outline-none
        ${className}
      `}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const ClassicFormTextarea: React.FC<ClassicFormTextareaProps> = ({ 
  label, 
  className = '', 
  ...props 
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      className={`
        w-full
        px-4
        py-3
        bg-white
        border
        border-gray-300
        rounded-md
        shadow-sm
        text-gray-900
        transition-colors
        duration-200
        ease-in-out
        focus:border-navy
        focus:ring-2
        focus:ring-navy
        focus:ring-opacity-20
        focus:outline-none
        placeholder-gray-400
        resize-y
        min-h-[120px]
        ${className}
      `}
      {...props}
    />
  </div>
);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aircraftType: string;
  departure: string;
  destination: string;
  requirements: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aircraftType: '',
    departure: '',
    destination: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose Oceania Jets</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience unparalleled private aviation with our premium services and dedication to excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-gold mb-6" />
                <h3 className="text-xl font-playfair text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FleetPreview />
      
      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-playfair text-gold mb-2">{stat.number}</p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Destinations />

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience seamless private jet travel in four simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-block p-4 rounded-full bg-white shadow-md mb-6">
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-playfair text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gold/20">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gold"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Request Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-semibold text-center text-navy mb-8">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ClassicFormInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                required
              />
              <ClassicFormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            <ClassicFormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
            />
            <ClassicFormInput
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
            <ClassicFormSelect
              label="Preferred Aircraft Type"
              name="aircraftType"
              value={formData.aircraftType}
              onChange={handleInputChange}
              options={[
                { value: '', label: 'Select aircraft type' },
                { value: 'light', label: 'Light Jet' },
                { value: 'midsize', label: 'Midsize Jet' },
                { value: 'heavy', label: 'Heavy Jet' }
              ]}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ClassicFormInput
                label="Departure"
                name="departure"
                value={formData.departure}
                onChange={handleInputChange}
                placeholder="City or airport code"
                required
              />
              <ClassicFormInput
                label="Destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="City or airport code"
                required
              />
            </div>
            <ClassicFormTextarea
              label="Additional Requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Please specify any special requirements or preferences"
            />
            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200 mt-4"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-semibold mb-6">Ready to Experience Luxury Travel?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our exclusive clientele and elevate your travel experience with Oceania Jets.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-quote" className="btn-primary">
              Request Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-gold text-gold hover:bg-gold/10 px-6 py-3 rounded-md font-medium transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;