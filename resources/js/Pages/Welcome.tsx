import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Home from './Home';

export default function Welcome() {
  return (
    <MainLayout>
      <Head title="Welcome" />
      <main>
        <Home />
      </main>
    </MainLayout>
  );
}