import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    preview: {
        port: 8000,
        strictPort: true,
    },
    server: {
        port: 8000,
        strictPort: true,
        host: true,
        origin: 'http://127.0.0.1:8000',
    },
});
