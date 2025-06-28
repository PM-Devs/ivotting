import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ showModal, modalContent, setShowModal, votingSections, selectedVotes, submitVotes }) => {
  if (!showModal || !modalContent) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {modalContent.type === 'candidate' && (
          <div>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Candidate Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 text-center">
              <img
                src={modalContent.candidate.image}
                alt={modalContent.candidate.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{modalContent.candidate.name}</h3>
              <p className="text-gray-600 mb-4">Running for {modalContent.section.title}</p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  This candidate is committed to representing student interests and bringing positive change to our school community.
                </p>
              </div>
            </div>
          </div>
        )}

        {modalContent.type === 'confirm' && (
          <div>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Confirm Your Votes</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">Please review your selections before submitting:</p>
              <div className="space-y-4 mb-6">
                {votingSections.map((section) => {
                  const selectedCandidate = section.candidates.find(
                    c => c.id === selectedVotes[section.id]
                  );
                  return (
                    <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-semibold text-gray-800">{section.title}</div>
                        <div className="text-sm text-gray-600">{selectedCandidate?.name}</div>
                      </div>
                      <span className="text-green-500">✔</span>
                    </div>
                  );
                })}
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl mb-6">
                <p className="text-sm text-yellow-800">
                  ⚠️ Once submitted, your votes cannot be changed. Your vote will be anonymous.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Review Again
                </button>
                <button
                  onClick={submitVotes}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Submit Votes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
