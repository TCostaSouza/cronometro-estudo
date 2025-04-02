import React from 'react';
import style from './Item.module.scss';
import { ITarefa } from '../../../types/tarefa';

interface Props extends ITarefa {
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionarTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() =>
        selecionarTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
