/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'bounce-shape': 'bounce-shape 3s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate',
        'blob-shape': 'blob-shape 6s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate',
        'delay-0': '',
        'delay-200': 'bounce-shape 3.2s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.2s, blob-shape 6.2s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.2s',
        'delay-400': 'bounce-shape 3.4s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.4s, blob-shape 6.4s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.4s',
        'delay-600': 'bounce-shape 3.6s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.6s, blob-shape 6.6s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.6s',
        'delay-800': 'bounce-shape 3.8s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.8s, blob-shape 6.8s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 0.8s',
        'delay-1000': 'bounce-shape 4s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1s, blob-shape 7s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1s',
        'delay-1200': 'bounce-shape 4.2s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1.2s, blob-shape 7.2s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1.2s',
        'delay-1400': 'bounce-shape 4.4s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1.4s, blob-shape 7.4s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate 1.4s',
      },
      keyframes: {
        'bounce-shape': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' },
        },
        'blob-shape': {
          '0%':   { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '25%':  { transform: 'translateY(30px) scale(1.08,0.92) rotate(3deg)' },
          '50%':  { transform: 'translateY(60px) scale(0.95,1.05) rotate(-2deg)' },
          '75%':  { transform: 'translateY(30px) scale(1.04,0.96) rotate(2deg)' },
          '100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}