import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './Providers/Theme/ThemeProvider.tsx';
import Home from './screens/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      {' '}
      <Home />
    </ThemeProvider>
  </StrictMode>,
);
