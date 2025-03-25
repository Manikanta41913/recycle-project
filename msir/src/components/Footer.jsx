// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} RecycleWise. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="mx-4 hover:underline">Privacy Policy</a>
          <a href="/terms" className="mx-4 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
