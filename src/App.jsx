import React, { useEffect } from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import themes from './Components/themes';

const {keepTheme} = themes

import AnimatedRoutes from './Components/AnimatedRoutes';



function App() {
  useEffect(() => {
    keepTheme();
  })


  return (
    <Router basename='/devportfolio'>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
