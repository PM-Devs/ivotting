import React from 'react';
import { Check } from 'lucide-react';

const VotingScreen = ({ votingSections, selectedVotes, handleCandidateSelect, openCandidateModal, openConfirmModal }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
    <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Cast Your Vote</h1>
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(Object.keys(selectedVotes).length / votingSections.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          {Object.keys(selectedVotes).length} of {votingSections.length} sections completed
        </p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
      {votingSections.map((section, sectionIndex) => (
        <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="text-purple-100">{section.description}</p>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {section.candidates.map((candidate, candidateIndex) => (
                <div
                  key={candidate.id}
                  className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    selectedVotes[section.id] === candidate.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg'
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                  onClick={() => handleCandidateSelect(section.id, candidate.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {selectedVotes[section.id] === candidate.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{candidate.name}</h3>
                      <p className="text-sm text-gray-600">Candidate #{candidateIndex + 1}</p>
                    </div>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        openCandidateModal(candidate, section);
                      }}
                      className="text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={openConfirmModal}
          disabled={Object.keys(selectedVotes).length !== votingSections.length}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:hover:scale-100"
        >
          {Object.keys(selectedVotes).length === votingSections.length 
            ? 'Submit Your Votes' 
            : `Select ${votingSections.length - Object.keys(selectedVotes).length} more candidate(s)`
          }
        </button>
      </div>
    </div>
  </div>
);

export default VotingScreen;
