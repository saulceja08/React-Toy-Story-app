import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Corrected from BrowseRouter to BrowserRouter */}
    <App />
  </BrowserRouter>, {/* Added comma after </App> */}
);
