import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (CNAME) is served from the root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
