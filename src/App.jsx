import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <main className="text-white bg-cover bg-center bg-[url('./images/background.png')]">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
