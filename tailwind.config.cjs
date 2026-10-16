const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './types.ts'
  ],
  // Classes assembled at runtime from a color variable (DTICalculator,
  // NetWorthTracker) can't be found by the content scan.
  safelist: [
    {
      pattern: /^(text|bg|border|from|ring)-(emerald|red|orange|yellow|blue|indigo|slate|rose)-(50|100|200|300|500)$/,
      variants: ['focus']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter is self-hosted via next/font (app/layout.tsx)
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
