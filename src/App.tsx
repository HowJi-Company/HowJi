import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from 'router/AppRouter';

function App() {
  return (
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  );
}

export default App;
