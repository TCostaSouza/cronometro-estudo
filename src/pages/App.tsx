import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  // Precisa ser criado aqui pq o fluxo de informações é unidirecional no React
  // Ou seja, não é possível transferir a informação de mudança de estado do item para a Lista
  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado:
          tarefa.id === tarefaSelecionada.id
            ? !tarefaSelecionada.selecionado
            : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className="App">
      <header className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
        <Cronometro
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
      </header>
    </div>
  );
}

export default App;
