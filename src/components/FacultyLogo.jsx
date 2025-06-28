import React from 'react';

const FacultyLogo = ({ color = '#1A337E' }) => (
  <div className="mb-4 flex items-center justify-center">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-24 md:w-24 drop-shadow-lg bg-white/80 rounded-full p-2">
      <circle cx="40" cy="40" r="38" fill={color} stroke="#fff" strokeWidth="4" />
      <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="Arial" dy=".3em">FE</text>
    </svg>
  </div>
);

export default FacultyLogo;
