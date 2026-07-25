import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import config from '../config.js'
import auth from 'summa-core/auth.js';
import App from './App.jsx'

auth.config(config.API)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)