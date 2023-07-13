import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Inspect from "./pages/inspect.js";
import Gallery from "./pages/gallery.js";
import Home from './pages/home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="inspect" element={<Inspect />} />
      </Route>
      
  </Routes>
</BrowserRouter>
);
