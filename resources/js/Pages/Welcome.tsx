import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Home from './Home';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}