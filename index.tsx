import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Extra layer of process protection
if (typeof window !== 'undefined') {
  (window as any).process = (window as any).process || {};
  (window as any).process.env = (window as any).process.env || {};
  if (!(window as any).process.env.NODE_ENV) {
    (window as any).process.env.NODE_ENV = 'production';
  }
}

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical: 'root' element not found in DOM.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Application Render Failure:", err);
    rootElement.innerHTML = `
      <div style="padding: 50px; text-align: center; font-family: sans-serif; color: #333;">
        <h2 style="color: #ef4444; font-size: 24px;">Application Initialization Error</h2>
        <p style="margin-top: 10px; color: #666;">We encountered a problem while starting the app.</p>
        <div style="margin-top: 20px; padding: 15px; background: #fef2f2; border-radius: 8px; display: inline-block; text-align: left; max-width: 80%; overflow: auto; font-family: monospace; font-size: 14px; border: 1px solid #fee2e2;">
          ${err instanceof Error ? err.message : String(err)}
        </div>
      </div>
    `;
  }
};

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}