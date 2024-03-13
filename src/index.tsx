import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Card } from './components/Card/Card';
import { CustomP } from './components/CustomP/CustomP';
import { Circle } from './components/Circle/Circle';
import { App2 } from './App2';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext } from 'react';
import { LanguageContainer } from './LanguageContainer';



const users = [
  { name: "Mario", surname: "Rossi", role: "Developer", openToWork: true },
  { name: "Luigi", surname: "Verdi", role: "Designer", openToWork: false },
  { name: "Giovanna", surname: "Bianchi", role: "Project Manager", openToWork: true },
  { name: "Carlo", surname: "Neri", role: "Software Engineer", openToWork: true },
  { name: "Maria", surname: "Gialli", role: "UX/UI Designer", openToWork: false },
  { name: "Paolo", surname: "Blu", role: "Frontend Developer", openToWork: true },
  { name: "Francesca", surname: "Verdi", role: "Product Manager", openToWork: false },
  { name: "Antonio", surname: "Rosa", role: "Backend Developer", openToWork: true }
];




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <div>
    <LanguageContainer />
    {/* {users.map(({name, surname, openToWork, role}) => (
    <Card title={`${name} ${surname}`} subtitle={role} option={openToWork}  />))} */}
    {/* <CustomP>
      <>
        <p>Pippo</p>
        <p>Pippo</p>
      </>
    </CustomP>

    <CustomP>
      <img alt='prova' style={{maxHeight: '30px'}} src='https://www.w3schools.com/howto/img_avatar.png'></img>
    </CustomP> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
