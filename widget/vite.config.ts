import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    // Ensure this is not set to prevent issues with css-injected-by-js
    // cssCodeSplit: false, 
    
    rollupOptions: {
      // ⬅️ CRITICAL FIX: Externalize React and React-DOM
      external: ['react', 'react-dom', 'framer-motion'], // Add framer-motion too, as it uses hooks
      
      output: {
        manualChunks: undefined,
        entryFileNames: 'embed.js', 
        
        // This is necessary to access React/ReactDOM from the global environment
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'framer-motion': 'FramerMotion', // Assuming global access
        },
        
        // Remove 'format: iife' to avoid forcing IIFE when using externalization
        // format: 'iife', 
      },
    },
  },
});