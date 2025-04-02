import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
  children?: React.ReactNode;
  tipo?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}> {
  render() {
    const { tipo = 'button', onClick } = this.props;

    return (
      <button type={tipo} className={style.botao} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
