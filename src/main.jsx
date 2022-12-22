import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import { RefProvider } from './context/RefContext';
import { AnimationProvider } from './context/AnimationContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RefProvider>
        <MenuProvider>
          <AnimationProvider>
            <App />
          </AnimationProvider>
        </MenuProvider>
      </RefProvider>
    </BrowserRouter>
  </React.StrictMode>
);
