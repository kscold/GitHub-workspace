import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./styles.css"; 기본적인 틀에 가두므로 사용하지 않음 따라서 모듈방식으로 사용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);