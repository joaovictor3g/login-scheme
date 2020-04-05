import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go';


import api from '../../services/api';

import './styles.css';

export default function Logged() {
    //const { id } = props.match.params;
    const [user, setUser] = useState([]);
    const history = useHistory();

    const id = localStorage.getItem('id');

    useEffect(() => {
        renderTable();
    }, []);
    
    async function renderTable() {
        const response = await api.get(`/list/${id}`);

        console.log(response.data);
        
        setUser(response.data);
    };

    function logOut() {
        localStorage.clear();

        history.push('/'); 
    }
    
    function myProfileOnGithub() {
        window.open('http://github.com/joaovictor3g/login-scheme');
    }

    return (
        <>
        <header className="back-to-principal-container">
            <aside>
                <GoMarkGithub size={33} onClick={myProfileOnGithub}/>  
            </aside>
            <p>SAPPI</p>
            <p className="log-out-button"><FiPower size={32} onClick={logOut}/></p>
        </header>
        <div className="all-container">
            <header> 
                <h1>Bem-vindo, {user.nome_login}</h1> 
            </header>
            <div className="log-container">
                <table border="1" className="table-container">
                    <tbody>
                        <tr className="header-tr">
                            <td>Matricula</td>
                            <td>Curso</td>
                            <td>E-mail</td>
                            <td>Disciplina</td>
                            <td>Turno</td>
                        </tr>
                        <tr className="user-container">
                            <td>{user.matricula}</td>
                            <td>{user.nome_curso}</td>
                            <td>{user.email}</td>
                            <td>{user.nome_disciplina}</td>
                            <td>{user.turno}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    );
};
