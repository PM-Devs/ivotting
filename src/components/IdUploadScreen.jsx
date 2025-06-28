import React from 'react';
import { User } from 'lucide-react';

const SCHOOL_COLORS = {
  primary: '#1A337E', // blue
  accent: '#FDF302', // yellow
};

const IdUploadScreen = ({ idImages, setIdImages, handleIdUpload, ocrResult }) => (
  <div className="min-h-screen flex items-center justify-center p-4" style={{background: `linear-gradient(120deg, #fff 0%, ${SCHOOL_COLORS.primary}10 100%)`}}>
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: `linear-gradient(135deg, ${SCHOOL_COLORS.accent} 0%, ${SCHOOL_COLORS.primary} 100%)`}}>
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{color: SCHOOL_COLORS.primary}}>Upload Your ID</h1>
          <p className="mb-2" style={{color: SCHOOL_COLORS.primary}}>For verification, upload your Student/Staff/National ID</p>
        </div>
        <form onSubmit={handleIdUpload} className="space-y-6">
          <div>
            <label className="block mb-2" style={{color: SCHOOL_COLORS.primary}}>Front of ID</label>
            <input type="file" accept="image/*" required onChange={e => setIdImages(imgs => ({ ...imgs, front: e.target.files[0] }))} />
          </div>
          <div>
            <label className="block mb-2" style={{color: SCHOOL_COLORS.primary}}>Back of ID (optional)</label>
            <input type="file" accept="image/*" onChange={e => setIdImages(imgs => ({ ...imgs, back: e.target.files[0] }))} />
          </div>
          <button type="submit" className="w-full py-3 px-6 rounded-xl font-semibold transform transition-all duration-200 hover:scale-105 active:scale-95" style={{background: `linear-gradient(90deg, ${SCHOOL_COLORS.primary} 0%, ${SCHOOL_COLORS.accent} 100%)`, color: '#fff'}}>Submit for Verification</button>
        </form>
        {ocrResult && (
          <div className="mt-6 p-4 rounded-xl text-center" style={{background: `${SCHOOL_COLORS.accent}22`}}>
            <p className="text-sm" style={{color: SCHOOL_COLORS.primary}}>OCR Result: Name: {ocrResult.name}, ID: {ocrResult.idNumber}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default IdUploadScreen;
