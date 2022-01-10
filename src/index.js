import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App message="Bonjour"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// un composant commence toujours par une majuscule 
// en majuscule pour éviter qu'il rentre en conflit dans le DOM