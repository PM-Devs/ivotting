import React from 'react';

const LoadingOverlay = ({ isSubmitting }) => {
  if (!isSubmitting) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Submitting Your Votes</h3>
        <p className="text-gray-600">Please wait while we process your votes securely...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
