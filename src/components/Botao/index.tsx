import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
  children?: React.ReactNode;
  tipo?: 'button' | 'submit' | 'reset' | undefined;

// Por padrão os custom components não reconhecem as funções nativas do HTML.
// Para alcançar esse fim, é necessário especificar quais funções são esperadas e como lidar com elas.
  onClick?: () => void; 

//   Aqui, configuramos onClick como uma propriedade opcional que recebe uma função, e retorna void por padrão.
}> {
  render() {
    const { tipo = 'button', onClick } = this.props;

    return (
      <button type={tipo} className={style.botao} onClick={onClick}>
        {/* A função passada para onClick será passada para o botão gerado no custom component. */}
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
