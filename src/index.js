import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apps from './Apps';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Apps />
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();