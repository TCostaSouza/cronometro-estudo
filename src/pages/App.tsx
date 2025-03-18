import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className="App">
      <header className={style.AppStyle}>        
        <Formulario />
        <Cronometro />
        <Lista />
      </header>
    </div>
  );
}

export default App;
