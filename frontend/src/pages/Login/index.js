import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function Login() {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function signUp(e) {
        e.preventDefault();
        
        const data = {
            matricula,
            senha
        };
        
        try {
            const response = await api.post('/graduate', data);
            
            if(!response.data) {
                alert('Matricula e/ou Senha incorretas');
                eraseFields();
                return;
            }
            alert(`Vocề está logado`);
            
            localStorage.setItem('id', response.data.id);

            history.push(`/logged/${response.data.id}`);
    
        } catch(err) {
            alert('Deu errado');
        }
    }

    function eraseFields() {
        setMatricula('');
        setSenha('');
    }

    return(
        <div className="login-container">
            <header className="main-header">LOGIN</header>
            <form onSubmit={signUp}>
                <p>Matricula:</p> 
                <input 
                    value={matricula} 
                    onChange={e => setMatricula(e.target.value)}
                                  
                />
                <p>Senha:</p> 
                <input 
                    type="password"
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                />
                <Link className="back-link" to="/graduate">
                    <FiLogIn size={16} color="#ff704d"/>
                    Não tenho cadastro
                </Link>

                <button  className="entrar" type="submit">Entrar</button>
                <button onClick={eraseFields} type="button" className="limpar">Limpar</button>
            </form>
        </div>
    );

}
