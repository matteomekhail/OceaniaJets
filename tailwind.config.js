import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
    extend: {
      colors: {
        navy: '#0B2545',
        gold: '#C6A962',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(11, 37, 69, 0.7), rgba(11, 37, 69, 0.7)), url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [forms],
};