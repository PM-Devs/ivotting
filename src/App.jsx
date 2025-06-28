import React, { useState, useEffect } from 'react';
import LoginCard from './components/LoginCard';
import Modal from './components/Modal';
import LoadingOverlay from './components/LoadingOverlay';
import OtpScreen from './components/OtpScreen';
import IdUploadScreen from './components/IdUploadScreen';
import PendingApprovalScreen from './components/PendingApprovalScreen';
import VotingScreen from './components/VotingScreen';
import ThankYouScreen from './components/ThankYouScreen';
import ResultsScreen from './components/ResultsScreen';
import { X } from 'lucide-react';
import bg from '../bg.jpg';
import AnimatedBgShapes from './components/AnimatedBgShapes';

const SCHOOL_COLORS = {
  primary: '#1A337E', // blue
  accent: '#FDF302', // yellow
  text: '#7A7A7A',
  secondary: '#54595F',
  error: '#DB301B',
};

const steps = [
  { key: 'login', label: 'Login' },
  { key: 'otp', label: 'OTP' },
  { key: 'upload-id', label: 'ID Verification' },
  { key: 'voting', label: 'Voting' },
  { key: 'thankyou', label: 'Thank You' },
  { key: 'results', label: 'Results' }
];

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [selectedVotes, setSelectedVotes] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [votingStarted, setVotingStarted] = useState(true);
  const [resultsReleased, setResultsReleased] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(300);
  const [idImages, setIdImages] = useState({ front: null, back: null });
  const [ocrResult, setOcrResult] = useState(null);
  const [idVerified, setIdVerified] = useState(false);
  const [pendingApproval, setPendingApproval] = useState(false);

  const votingSections = [
    {
      id: 'president',
      title: 'President',
      description: 'Student Body President',
      candidates: [
        { id: 'p1', name: 'Sarah Johnson', image: '/api/placeholder/150/150', votes: 245 },
        { id: 'p2', name: 'Michael Chen', image: '/api/placeholder/150/150', votes: 189 },
        { id: 'p3', name: 'Emma Davis', image: '/api/placeholder/150/150', votes: 167 }
      ]
    },
    {
      id: 'secretary',
      title: 'Secretary',
      description: 'Student Body Secretary',
      candidates: [
        { id: 's1', name: 'Alex Rivera', image: '/api/placeholder/150/150', votes: 201 },
        { id: 's2', name: 'Jordan Kim', image: '/api/placeholder/150/150', votes: 178 },
        { id: 's3', name: 'Taylor Brown', image: '/api/placeholder/150/150', votes: 222 }
      ]
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: 'Event Organizer',
      candidates: [
        { id: 'o1', name: 'Casey Wilson', image: '/api/placeholder/150/150', votes: 198 },
        { id: 'o2', name: 'Morgan Lee', image: '/api/placeholder/150/150', votes: 234 },
        { id: 'o3', name: 'Riley Martinez', image: '/api/placeholder/150/150', votes: 169 }
      ]
    }
  ];

  const mockStats = {
    totalRegistered: 850,
    totalVotes: 601,
    turnoutPercentage: 70.7
  };

  useEffect(() => {
    let timer;
    if (currentStep === 'otp' && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentStep, countdown]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
      setCurrentStep('otp');
      setCountdown(300);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setCurrentStep('upload-id');
    }
  };

  const handleIdUpload = async (e) => {
    e.preventDefault();
    setOcrResult({
      name: 'Sarah Johnson', // mock
      idNumber: 'STU12345', // mock
    });
    if (phoneNumber === '1234567890') {
      setIdVerified(true);
      setCurrentStep('voting');
    } else {
      setPendingApproval(true);
      setCurrentStep('pending-approval');
    }
  };

  const handleCandidateSelect = (sectionId, candidateId) => {
    setSelectedVotes(prev => ({
      ...prev,
      [sectionId]: candidateId
    }));
  };

  const openCandidateModal = (candidate, section) => {
    setModalContent({
      type: 'candidate',
      candidate,
      section
    });
    setShowModal(true);
  };

  const openConfirmModal = () => {
    const selectedCount = Object.keys(selectedVotes).length;
    if (selectedCount === votingSections.length) {
      setModalContent({
        type: 'confirm',
        votes: selectedVotes
      });
      setShowModal(true);
    }
  };

  const submitVotes = async () => {
    setIsSubmitting(true);
    setShowModal(false);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setCurrentStep('thankyou');
    setTimeout(() => {
      if (resultsReleased) {
        setCurrentStep('results');
      }
    }, 3000);
  };

  // Professional layout wrapper
  return (
    <div
      className={`min-h-screen flex flex-col relative`} 
      style={currentStep === 'login' ? {
        background: 'linear-gradient(120deg, #e0e7ff 0%, #fdf2f8 100%)',
      } : {}}
    >
      {currentStep === 'login' && <AnimatedBgShapes />}
      {/* Header */}
      <header className="w-full bg-white/90 shadow-sm border-b border-gray-200 py-3 px-4 md:px-6 flex items-center justify-between" style={{borderBottomColor: SCHOOL_COLORS.accent}}>
        <div className="flex items-center gap-3">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-lg md:text-xl font-bold tracking-wide" style={{color: SCHOOL_COLORS.primary}}>School Voting Platform</span>
        </div>
        <div className="text-xs md:text-sm font-mono" style={{color: SCHOOL_COLORS.secondary}}>
          {phoneNumber ? `User: ${phoneNumber}` : 'Not logged in'}
        </div>
      </header>
      {/* Stepper */}
      <nav className="w-full bg-white/80 border-b border-gray-100 py-2 px-2 md:px-6 flex items-center justify-center overflow-x-auto" style={{borderBottomColor: SCHOOL_COLORS.accent}}>
        <ol className="flex space-x-2 md:space-x-4">
          {steps.map((step, idx) => (
            <li key={step.key} className="flex items-center">
              <span className={`text-xs md:text-sm font-semibold ${currentStep === step.key ? '' : ''}`} style={{color: currentStep === step.key ? SCHOOL_COLORS.accent : SCHOOL_COLORS.primary}}>{step.label}</span>
              {idx < steps.length - 1 && <span className="mx-1 md:mx-2" style={{color: SCHOOL_COLORS.accent}}>→</span>}
            </li>
          ))}
        </ol>
      </nav>
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center py-4 md:py-8 px-1 md:px-2">
        <div className="w-full max-w-lg md:max-w-2xl mx-auto">
          {currentStep === 'login' ? (
            <LoginCard phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} handlePhoneSubmit={handlePhoneSubmit} />
          ) : (
            <div className="rounded-2xl shadow-xl p-2 md:p-8 min-h-[450px] flex flex-col justify-center"
              style={{
                background: currentStep === 'otp'
                  ? 'linear-gradient(120deg, #FDF302 0%, #fff 100%)' // yellow for OTP
                  : currentStep === 'upload-id'
                  ? 'linear-gradient(120deg, #1A337E 0%, #fff 100%)' // blue for ID upload
                  : currentStep === 'pending-approval'
                  ? 'linear-gradient(120deg, #DB301B 0%, #fff 100%)' // error red for pending
                  : currentStep === 'voting'
                  ? 'linear-gradient(120deg, #FDF302 0%, #1A337E 100%)' // yellow to blue for voting
                  : currentStep === 'thankyou'
                  ? 'linear-gradient(120deg, #1A337E 0%, #FDF302 100%)' // blue to yellow for thank you
                  : currentStep === 'results'
                  ? 'linear-gradient(120deg, #FDF302 0%, #fff 100%)' // yellow for results
                  : 'linear-gradient(120deg, #fff 60%, #FDF30210 100%)',
                border: `1.5px solid #1A337E`,
              }}
            >
              {currentStep === 'otp' && (
                <OtpScreen otp={otp} setOtp={setOtp} showOtp={showOtp} setShowOtp={setShowOtp} countdown={countdown} formatTime={formatTime} handleOtpSubmit={handleOtpSubmit} setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 'upload-id' && (
                <IdUploadScreen idImages={idImages} setIdImages={setIdImages} handleIdUpload={handleIdUpload} ocrResult={ocrResult} />
              )}
              {currentStep === 'pending-approval' && (
                <PendingApprovalScreen setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 'voting' && (
                <VotingScreen votingSections={votingSections} selectedVotes={selectedVotes} handleCandidateSelect={handleCandidateSelect} openCandidateModal={openCandidateModal} openConfirmModal={openConfirmModal} />
              )}
              {currentStep === 'thankyou' && (
                <ThankYouScreen resultsReleased={resultsReleased} setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 'results' && (
                <ResultsScreen votingSections={votingSections} mockStats={mockStats} resultsReleased={resultsReleased} />
              )}
            </div>
          )}
        </div>
      </main>
      {/* Modal, Loading */}
      <Modal showModal={showModal} modalContent={modalContent} setShowModal={setShowModal} votingSections={votingSections} selectedVotes={selectedVotes} submitVotes={submitVotes} />
      <LoadingOverlay isSubmitting={isSubmitting} />
      {/* Footer */}
      <footer className="w-full bg-white/90 border-t border-gray-200 py-2 md:py-3 px-2 md:px-6 text-center text-xs mt-4 md:mt-8" style={{color: SCHOOL_COLORS.primary, borderTopColor: SCHOOL_COLORS.accent}}>
        &copy; {new Date().getFullYear()} School Voting Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;