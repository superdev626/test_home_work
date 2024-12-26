import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

// Renders the main App component into the 'root' div in the index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
