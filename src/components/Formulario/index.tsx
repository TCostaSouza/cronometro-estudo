import React from 'react';
import style from './Formulario.module.scss'
import Botao from '../Botao';

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style["inputContainer"]}> {/* Outra forma de escrever */}
          <label>Tempo</label>
          <input
            type="time"
            name='tempo'
            id='tempo'
            min='00:00:00'
            max='01:30:00'
            />
        </div>
        <Botao tipo='submit'>
          Adicionar
        </Botao>
      </form>
    );
  }
}


export default Formulario