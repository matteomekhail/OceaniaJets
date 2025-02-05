import React, { PropsWithChildren } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Toaster } from 'react-hot-toast';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0B2545',
            color: '#fff',
            border: '1px solid rgba(198, 169, 98, 0.2)',
            backdropFilter: 'blur(8px)',
            fontSize: '1.1rem',
            padding: '1rem 1.5rem',
            maxWidth: '500px',
            width: '90%',
          },
          success: {
            iconTheme: {
              primary: '#C6A962',
              secondary: '#0B2545',
            },
            style: {
              border: '1px solid rgba(198, 169, 98, 0.4)',
            },
          },
          error: {
            style: {
              border: '1px solid rgba(255, 87, 87, 0.4)',
            },
          },
        }}
      />
    </div>
  );
} 