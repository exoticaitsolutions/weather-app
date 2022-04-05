import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Location from "./Location"
import Search from './components/search';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/result/:city/:lat/:long" element={<Location />} />
          </Routes>
    <App />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




