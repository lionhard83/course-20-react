import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Circle } from './components/Circle/Circle';
import { CharactersList } from './components/CharactersList/CharacterList';
import { Text } from './components/Text/Text';
export const ThemeContext = createContext('light');


const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const color = theme === 'dark' ? '#000' : '#FFF';
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{backgroundColor: color, height: '100vh'}}>
        <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>{theme}</button>
        <Text ></Text>
        {/* <CharactersList /> */}
        {/* <Test /> */}
        {/* <p>{sum}</p>
        <Circle calculateSum={setSum}></Circle> */}
        {/* */}
        {/* <Circle calculateSum={setSum}></Circle> */}
        {/* <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
