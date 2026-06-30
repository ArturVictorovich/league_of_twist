import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './Providers/Theme/ThemeProvider.tsx';
import Home from './screens/Home.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {' '}
        <Home />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
