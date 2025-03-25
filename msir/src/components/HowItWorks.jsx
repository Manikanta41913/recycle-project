// HowItWorks.jsx
import React from 'react';

const steps = [
  { icon: '♻️', title: 'Collect Waste', description: 'Gather your recyclables like paper, plastic, and metal.' },
  { icon: '🚛', title: 'Sort and Process', description: 'We sort, clean, and process materials for reuse.' },
  { icon: '🌍', title: 'Reduce Waste', description: 'Recycled products are turned into new, eco-friendly items.' },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-lg">
            <div className="text-4xl">{step.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
