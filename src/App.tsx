import React from 'react';
import logo from './panda_1024.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
          <strong>Panda</strong> for Reddit
        </p>
        <p className="App-title-subtext">A new way to experience Reddit on iOS coming soon</p>

        <p className="footer">Copyright 2020 © George Antonious</p>
      </header>
    </div>
  );
}

export default App;
