import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}