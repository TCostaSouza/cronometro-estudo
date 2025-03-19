import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className="App">
      <header className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/>
        <Cronometro />
      </header>
    </div>
  );
}

export default App;
