import React from 'react';
import { User, Phone } from 'lucide-react';

const LoginScreen = ({ phoneNumber, setPhoneNumber, handlePhoneSubmit }) => (
  <div>
    <div className="text-center mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
        <User className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-lg font-bold text-gray-800 mb-1">Student Voting</h2>
      <p className="text-sm text-gray-700">Enter your phone number to vote</p>
    </div>
    
    <div className="space-y-4">
      <div className="relative">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 15))}
          placeholder="Enter phone number"
          className="w-full px-4 py-3 border-2 border-white/40 bg-white/20 backdrop-blur-sm rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-center text-lg font-mono tracking-widest text-gray-800 placeholder-gray-600"
          maxLength={15}
          required
        />
        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
      </div>
      
      <button
        type="submit"
        onClick={handlePhoneSubmit}
        disabled={phoneNumber.length < 10}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Send OTP
      </button>
    </div>
    
    <div className="mt-4 p-3   ">
      <p className="text-xs text-red-800 text-center">
        You'll receive an OTP via SMS and email for verification
      </p>
    </div>
  </div>
);

export default LoginScreen;