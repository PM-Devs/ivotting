import React from 'react';
import FacultyLogo from './FacultyLogo';
import LoginScreen from './LoginScreen';

const SCHOOL_COLORS = {
  primary: '#1A337E', // blue
  accent: '#FDF302', // yellow
  text: '#7A7A7A',
  secondary: '#54595F',
  error: '#DB301B',
};

const LoginCard = ({ phoneNumber, setPhoneNumber, handlePhoneSubmit }) => (
  <div className="flex flex-col items-center justify-center min-h-[500px] w-full">
    <FacultyLogo color={SCHOOL_COLORS.primary} />
    <div 
      className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-3xl shadow-2xl p-6 md:p-8 m-2 md:m-4 w-full max-w-md"
      style={{
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      <img src="/vite.svg" alt="Logo" className="h-12 w-12 mx-auto mb-4" />
      
      <h1 className="text-2xl md:text-3xl font-extrabold mb-1 md:mb-2 tracking-wide" style={{color: SCHOOL_COLORS.primary}}>
        Welcome to iVoting Platform
      </h1>
      
      <h2 className="text-base md:text-lg font-semibold mb-1" style={{color: SCHOOL_COLORS.secondary}}>
        Built by the Faculty of Engineering
      </h2>
      
      <h3 className="text-sm md:text-md mb-3 md:mb-6" style={{color: SCHOOL_COLORS.text}}>
        Takoradi Technical University
      </h3>
      
      <p className="mb-4 md:mb-6 max-w-lg mx-auto text-xs md:text-base" style={{color: SCHOOL_COLORS.text}}>
        Secure, transparent, and user-friendly digital voting for students and staff. Please log in with your phone number to begin.
      </p>
      
      <div className="mt-4 md:mt-8">
        <LoginScreen phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} handlePhoneSubmit={handlePhoneSubmit} />
      </div>
    </div>
  </div>
);

export default LoginCard;