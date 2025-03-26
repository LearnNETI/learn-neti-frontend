import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import './variables.css';
import App from './App';
import { HashRouter } from "react-router-dom";  // Используем HashRouter вместо BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
