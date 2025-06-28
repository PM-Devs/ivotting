import React from 'react';
import { Clock } from 'lucide-react';

const PendingApprovalScreen = ({ setCurrentStep }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Pending Approval</h1>
        <p className="text-gray-600 mb-6">Your ID could not be auto-verified. An admin will review your submission shortly. Please check back later.</p>
        <button onClick={() => setCurrentStep('login')} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold transform transition-all duration-200 hover:scale-105 active:scale-95">Back to Login</button>
      </div>
    </div>
  </div>
);

export default PendingApprovalScreen;
