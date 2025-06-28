import React from 'react';
import { Mail, Clock, Eye, EyeOff } from 'lucide-react';

const SCHOOL_COLORS = {
  primary: '#1A337E', // blue
  accent: '#FDF302', // yellow
};

const OtpScreen = ({ otp, setOtp, showOtp, setShowOtp, countdown, formatTime, handleOtpSubmit, setCurrentStep }) => (
  <div className="min-h-screen flex items-center justify-center p-4" style={{background: `linear-gradient(120deg, ${SCHOOL_COLORS.accent} 0%, #fff 100%)`}}>
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: `linear-gradient(135deg, ${SCHOOL_COLORS.primary} 0%, ${SCHOOL_COLORS.accent} 100%)`}}>
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{color: SCHOOL_COLORS.primary}}>Verify OTP</h1>
          <p className="mb-2" style={{color: SCHOOL_COLORS.primary}}>Enter the 6-digit code sent to your phone and email</p>
          <div className="mt-4 flex items-center justify-center" style={{color: SCHOOL_COLORS.accent}}>
            <Clock className="w-4 h-4 mr-2" />
            <span className="font-mono font-bold">{formatTime(countdown)}</span>
          </div>
        </div>
        <form onSubmit={handleOtpSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showOtp ? 'text' : 'password'}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-center text-2xl font-mono tracking-widest"
              maxLength={6}
              required
            />
            <button
              type="button"
              onClick={() => setShowOtp(!showOtp)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showOtp ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <button
            type="submit"
            disabled={otp.length !== 6}
            className="w-full py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 active:scale-95"
            style={{background: `linear-gradient(90deg, ${SCHOOL_COLORS.primary} 0%, ${SCHOOL_COLORS.accent} 100%)`, color: '#fff'}}>
            Verify & Continue
          </button>
        </form>
        <button
          onClick={() => setCurrentStep('login')}
          className="w-full mt-4 transition-colors font-semibold"
          style={{color: SCHOOL_COLORS.primary}}
        >
          ← Back to login
        </button>
      </div>
    </div>
  </div>
);

export default OtpScreen;
