import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tamagotchi from './Components/Tamagotchi';

function App() {
  return (
      <div className="dashboard">
        <div className="text-center mb-3">
          <h1>Welcome to Kimagotchi</h1>
          <p>PRESS A BUTTON TO GET STARTED</p>
        </div>
        <Tamagotchi />
      </div>
  );
}

export default App;
