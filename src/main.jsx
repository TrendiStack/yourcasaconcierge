import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import { RefProvider } from './context/RefContext';
import { AnimationProvider } from './context/AnimationContext';

import './index.css';
import { SanityProvider } from './context/SanityContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SanityProvider>
        <RefProvider>
          <MenuProvider>
            <AnimationProvider>
              <App />
            </AnimationProvider>
          </MenuProvider>
        </RefProvider>
      </SanityProvider>
    </BrowserRouter>
  </React.StrictMode>
);
