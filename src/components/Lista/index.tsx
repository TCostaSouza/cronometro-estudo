import React from 'react';
import style from './Lista.module.scss';
import Item from './Item/index';
import { ITarefa } from '../../types/tarefa';

interface Props {
  tarefas: ITarefa[],
  selecionarTarefa: (tarefaSelecionada: ITarefa) => (void)
}


function Lista( { tarefas, selecionarTarefa }: Props ) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
            selecionarTarefa={selecionarTarefa}
            key={item.id} {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
