# 🚀 School Voting Platform - Vite Setup Guide

## Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

## 📦 Step 1: Create Vite Project

```bash
# Create new Vite project with React
npm create vite@latest school-voting-platform -- --template react

# Navigate to project directory
cd school-voting-platform

# Install dependencies
npm install
```

## 🎨 Step 2: Install Required Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Lucide React for icons
npm install lucide-react

# Optional: Install additional utilities
npm install clsx tailwind-merge
```

## ⚙️ Step 3: Configure Tailwind CSS

**Update `tailwind.config.js`:**
```javascript
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
      }
    },
  },
  plugins: [],
}
```

**Update `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  body {
    font-size: 16px; /* Prevent zoom on iOS */
  }
}
```

## 📱 Step 4: Replace App Component

**Replace `src/App.jsx` with the voting platform code:**

```jsx
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Check, X, User, Clock, Trophy, BarChart3, Eye, EyeOff } from 'lucide-react';

// [Copy the entire VotingApp component code from the artifact here]

export default VotingApp;
```

## 🏗️ Step 5: Update Main Entry Point

**Update `src/main.jsx`:**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 🌐 Step 6: Configure Vite for Mobile Development

**Update `vite.config.js`:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

## 📱 Step 7: Add PWA Support (Optional)

```bash
# Install PWA plugin
npm install -D vite-plugin-pwa
```

**Update `vite.config.js` to include PWA:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'School Voting Platform',
        short_name: 'VotingApp',
        description: 'Secure school voting platform',
        theme_color: '#6366f1',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  // ... rest of config
})
```

## 🎯 Step 8: Environment Configuration

**Create `.env` file:**
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=School Voting Platform
VITE_TWILIO_ACCOUNT_SID=your_twilio_sid
VITE_ENABLE_DEMO_MODE=true
```

**Create `.env.production`:**
```env
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_APP_NAME=School Voting Platform
VITE_ENABLE_DEMO_MODE=false
```

## 🏃‍♂️ Step 9: Run the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Step 10: Mobile Testing

### Test on Mobile Devices:
1. **Find your local IP address:**
   ```bash
   # On Mac/Linux
   ifconfig | grep inet
   
   # On Windows
   ipconfig
   ```

2. **Access from mobile device:**
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

3. **Use browser dev tools:**
   - Chrome DevTools → Device Mode
   - Firefox → Responsive Design Mode

## 🔧 Step 11: Additional Scripts

**Add to `package.json`:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write .",
    "mobile": "vite --host 0.0.0.0 --port 3000"
  }
}
```

## 🛠️ Step 12: Backend Integration

**Create API service (`src/services/api.js`):**
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
  // Send OTP
  sendOtp: async (phoneNumber) => {
    const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber })
    });
    return response.json();
  },

  // Verify OTP
  verifyOtp: async (phoneNumber, otp) => {
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber, otp })
    });
    return response.json();
  },

  // Get voting sections
  getVotingSections: async (token) => {
    const response = await fetch(`${API_BASE_URL}/voting/sections`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  // Submit votes
  submitVotes: async (votes, token) => {
    const response = await fetch(`${API_BASE_URL}/voting/submit`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ votes })
    });
    return response.json();
  },

  // Get results
  getResults: async (token) => {
    const response = await fetch(`${API_BASE_URL}/voting/results`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};
```

## 📋 Final Project Structure

```
school-voting-platform/
├── public/
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── LoginScreen.jsx
│   │   ├── OtpScreen.jsx
│   │   ├── VotingScreen.jsx
│   │   ├── ResultsScreen.jsx
│   │   └── Modal.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.production
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment Options

### Netlify:
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Vercel:
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages:
```bash
npm install -D gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/school-voting-platform"
npm run build
npm run deploy
```

---

## 🎉 You're Ready!

Your voting platform is now set up and ready for development. The app will automatically refresh when you make changes, and you can test it on mobile devices using your local network IP address.

**Next Steps:**
1. Set up your backend API
2. Configure SMS/Email services (Twilio, SendGrid)
3. Implement real authentication
4. Add database integration
5. Deploy to production

Happy coding! 🗳️✨