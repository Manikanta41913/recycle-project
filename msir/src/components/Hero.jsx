// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="text-center bg-green-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Recycling for a Greener Tomorrow</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover how recycling can help reduce waste, conserve resources, and protect our planet. Join us in making the world a better place.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
