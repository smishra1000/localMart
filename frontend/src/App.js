// src/App.js
import React from 'react';
import Routes from './routes';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return <Routes />;
}

export default App;
