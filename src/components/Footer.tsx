import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-300 text-sm space-y-1">
        <div>
          © {new Date().getFullYear()} Hüseyin Koç. All rights reserved.
        </div>
        <div>
          For business, contact <a href="mailto:kochuseyin@hotmail.fr" className="underline hover:text-primary-400">kochuseyin@hotmail.fr</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 