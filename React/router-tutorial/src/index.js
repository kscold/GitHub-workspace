import React from "react";
import ReactDOM from "react-dom/client"; //{}로 추출하면 안됨
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //document.getElementById('root') React 17버전
);

