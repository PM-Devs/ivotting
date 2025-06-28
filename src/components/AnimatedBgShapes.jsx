import React from 'react';
import bg from '../../bg.jpg';

const AnimatedBgShapes = () => {
  // Array of 8 shapes with different positions, delays, and sizes
  const shapes = [
    { style: 'left-4 top-40 w-32 h-32', delay: 'animate-delay-0', blob: true },
    { style: 'right-8 top-56 w-40 h-40', delay: 'animate-delay-200', blob: false },
    { style: 'left-1/3 top-1/3 w-28 h-28', delay: 'animate-delay-400', blob: true },
    { style: 'right-1/4 top-1/2 w-36 h-36', delay: 'animate-delay-600', blob: false },
    { style: 'left-12 bottom-24 w-24 h-24', delay: 'animate-delay-800', blob: true },
    { style: 'right-16 bottom-32 w-32 h-32', delay: 'animate-delay-1000', blob: false },
    { style: 'left-1/2 bottom-16 w-20 h-20', delay: 'animate-delay-1200', blob: true },
    { style: 'right-1/3 bottom-1/4 w-28 h-28', delay: 'animate-delay-1400', blob: false },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.style} animate-blob-shape ${s.delay}`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: s.blob ? '40% 60% 60% 40% / 40% 40% 60% 60%' : '60% 40% 30% 70% / 60% 60% 40% 40%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            opacity: 0.92,
            filter: 'saturate(1.1)',
            animationDuration: `${5 + (i % 3)}s`,
            animationTimingFunction: 'cubic-bezier(.68,-0.55,.27,1.55)',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBgShapes;
