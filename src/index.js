import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalCSS } from './globalcss';
import App from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalCSS/>
    <App />
  </React.StrictMode>
);
