import React from 'react';
import './style.scss'
import Botao from '../Botao';

class Formulario extends React.Component {
  render() {
    return (
      <form className='novaTarefa'>
        <div className='inputContainer'>
          <label htmlFor="tarefa">Adicione um estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className='inputContainer'>
          <label>Tempo</label>
          <input
            type="time"
            name='tempo'
            id='tempo'
            min='00:00:00'
            max='01:30:00'
            />
        </div>
        <Botao />
      </form>
    );
  }
}


export default Formulario