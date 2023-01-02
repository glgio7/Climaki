import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from './globalcss';
import Live from './pages/capitais';
import Home from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <GlobalCSS />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/capitais/:id" element={<Live/>} />
    </Routes>
  </BrowserRouter>
);
