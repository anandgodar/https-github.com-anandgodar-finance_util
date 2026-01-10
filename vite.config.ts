import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chart-vendor': ['recharts'],
          'google-vendor': ['@google/genai'],
          // Calculator chunks (group by usage)
          'tier1-calculators': [
            './components/MortgageCalculator',
            './components/SalaryCalculator',
            './components/RetirementOptimizer',
            './components/FIREPlanner',
            './components/InvestmentCalculator'
          ],
          'tier2-calculators': [
            './components/CreditCardPayoff',
            './components/EMICalculator',
            './components/QuarterlyTaxCalculator',
            './components/ChildTaxCreditCalculator',
            './components/FreelanceHub'
          ],
          'tier3-calculators': [
            './components/EmergencyFundTool',
            './components/LoanComparison',
            './components/NetWorthTracker',
            './components/ACASubsidyCalculator'
          ],
          // Blog chunks
          'blog-posts': [
            './components/blog/ChildTaxCreditGuide2025',
            './components/blog/ACAHealthInsuranceFreelancers2025',
            './components/blog/QuarterlyEstimatedTaxesGuide2025',
            './components/blog/SelfEmploymentTaxGuide2025',
            './components/blog/TaxDeductionsFreelancers2025',
            './components/blog/Comparison1099VsW2_2025',
            './components/blog/LLCvsSoleProp2025',
            './components/blog/SEPIRAvsSolo401k2025',
            './components/blog/HomeOfficeDeduction2025',
            './components/blog/MortgageCalculatorGuide2025',
            './components/blog/HowMuchHouseCanIAfford2025',
            './components/blog/ShouldIPayOffDebtOrInvest2025',
            './components/blog/HowToCalculateTakeHomePay2025',
            './components/blog/RothIRAvsTraditionalIRA2025',
            './components/blog/HowMuchEmergencyFundDoINeed2025',
            './components/blog/FIRECalculatorGuide2025',
            './components/blog/BestRetirementCalculator2025',
            './components/blog/InvestmentCalculatorGuide2025',
            './components/blog/BestMortgageCalculator2025'
          ]
        },
        // Optimize chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1000 // Warn if chunk exceeds 1MB
  },
  server: {
    port: 3000
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'recharts']
  }
});