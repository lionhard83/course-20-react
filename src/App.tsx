import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Circle } from './components/Circle/Circle';
import { CharactersList } from './components/CharactersList/CharacterList';

const App = () => {
  const [sum, setSum] = useState(0);
  return (
    <div className="App">
      <CharactersList></CharactersList>
      {/* <p>{sum}</p>
      <Circle calculateSum={setSum}></Circle> */}
      {/* */}
      {/* <Circle calculateSum={setSum}></Circle> */}
      {/* <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle> */}
    </div>
  );
}

export default App;
