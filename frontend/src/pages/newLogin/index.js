import React from 'react'

import './styles.css';

export default function NewLogin() {
    return (
        <>
        <div className="principal-container">
            <header>Novo Login</header>
            <input placeholder="Digite seu nome" className="first-input"/>
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Defina uma senha" />
            <input placeholder="Digite seu curso" />

            <button type="submit">Cadastrar</button>
            <button type="submit">Limpar</button>
    
        </div>
        </>
    )
}
