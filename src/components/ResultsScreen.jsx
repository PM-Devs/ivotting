import React from 'react';
import { Trophy } from 'lucide-react';

const ResultsScreen = ({ votingSections, mockStats, resultsReleased }) => {
  if (!resultsReleased) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Results Not Yet Released</h2>
          <p className="text-gray-600">Please check back later. The admin has not enabled results viewing yet.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Election Results</h1>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600">{mockStats.totalRegistered}</div>
                <div className="text-sm text-gray-600">Registered Voters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{mockStats.totalVotes}</div>
                <div className="text-sm text-gray-600">Votes Cast</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mockStats.turnoutPercentage}%</div>
                <div className="text-sm text-gray-600">Turnout</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {votingSections.map((section) => {
            const totalVotes = section.candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
            const winner = section.candidates.reduce((prev, current) => prev.votes > current.votes ? prev : current);
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6">
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <p className="text-indigo-100">Total votes: {totalVotes}</p>
                </div>
                <div className="p-6 space-y-4">
                  {section.candidates
                    .sort((a, b) => b.votes - a.votes)
                    .map((candidate, index) => {
                      const percentage = totalVotes > 0 ? (candidate.votes / totalVotes) * 100 : 0;
                      const isWinner = candidate.id === winner.id;
                      return (
                        <div key={candidate.id} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="relative">
                                <img
                                  src={candidate.image}
                                  alt={candidate.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                {isWinner && (
                                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <Trophy className="w-3 h-3 text-white" />
                                  </div>
                                )}
                              </div>
                              <div>
                                <h3 className={`font-semibold ${isWinner ? 'text-yellow-600' : 'text-gray-800'}`}>
                                  {candidate.name}
                                  {isWinner && <span className="ml-2 text-sm">👑 Winner</span>}
                                </h3>
                                <p className="text-sm text-gray-600">Position #{index + 1}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-800">{candidate.votes}</div>
                              <div className="text-sm text-gray-600">{percentage.toFixed(1)}%</div>
                            </div>
                          </div>
                          <div className="bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full transition-all duration-1000 ${
                                isWinner 
                                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' 
                                  : 'bg-gradient-to-r from-indigo-400 to-blue-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
