import React from 'react';
import './App.css';
import Download from './Components/Download';
import LandingPage from './Components/LandingPage';
import Features from './Components/Features';
import GameplayVideo from './Components/GameplayVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <header className="App-header">
        <div id="home">
          <LandingPage />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="trailer">
          <GameplayVideo />
        </div>
        <div id="download">
          <Download />
        </div>
      </header>
    </div>
  );
}

export default App;
