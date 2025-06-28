import React from 'react';
import { Check } from 'lucide-react';

const ThankYouScreen = ({ resultsReleased, setCurrentStep }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your vote has been submitted anonymously and securely. 
          Your participation helps shape our school's future.
        </p>
        <div className="bg-green-50 p-4 rounded-xl mb-6">
          <p className="text-sm text-green-800">
            Results will be announced once voting concludes. 
            You'll be notified via SMS and email.
          </p>
        </div>
        {resultsReleased && (
          <button
            onClick={() => setCurrentStep('results')}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View Results
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ThankYouScreen;
