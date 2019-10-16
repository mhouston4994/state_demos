import React from 'react';
import './App.css';
import RollDice from './RollDice';
import Lotto from './Lotto';
import Flipper from './flipper';
import colorPicker from './ColorPicker';
import ColorPicker from './ColorPicker';


function App() {
  return (
    <div className="App">
      <RollDice />
      <Lotto />
      <Lotto title={'Mini Daily'} maxBalls={4} />
      <Flipper />
      <ColorPicker />
    </div>
  );
}

export default App;
