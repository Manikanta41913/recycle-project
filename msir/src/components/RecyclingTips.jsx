// RecyclingTips.jsx
import React from 'react';

const tips = [
  { question: 'What items can I recycle?', answer: 'You can recycle paper, cardboard, plastics, metals, and certain glass items.' },
  { question: 'How should I clean recyclables?', answer: 'Rinse containers to remove food residues before recycling.' },
  { question: 'What about e-waste?', answer: 'Electronic waste like old phones or batteries should be recycled at specialized centers.' },
];

const RecyclingTips = () => {
  return (
    <section className="py-12 px-4 bg-green-50">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Recycling Tips</h2>
      <div className="max-w-4xl mx-auto">
        {tips.map((tip, index) => (
          <div key={index} className="mb-4">
            <button className="w-full text-left text-lg font-semibold p-4 bg-white border border-gray-200 rounded hover:bg-gray-100">
              {tip.question}
            </button>
            <p className="mt-2 px-4 text-gray-600">{tip.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecyclingTips;
