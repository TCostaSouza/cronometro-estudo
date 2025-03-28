import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component<{children?: React.ReactNode, tipo?: "button" | "submit" | "reset" | undefined}> {
    render() {
        const { tipo = "button"} = this.props

        return (
            <button type={tipo} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao