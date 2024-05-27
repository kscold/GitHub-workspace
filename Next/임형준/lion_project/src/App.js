import React from 'react';
import './App.css';
import CategoryList from './category/CategoryList';
import LoginForm from './Loginpage/LoginForm';
import SignupForm from './Loginpage/SignupForm';
import './App.scss'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <CategoryList/>
    </div>
  );
}

export default App;
