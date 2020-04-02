import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

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

        setUser(response.data);
    };

    function logOut() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="all-container">
            <header>
                <h1>Bem-vindo, {user.nome}</h1>
                <button onClick={logOut}>
                    <FiPower size={32} />
                </button>
            </header>
            <div className="log-container">
                <table border="1" className="table-container">
                    <tbody>
                        <tr className="header-tr">
                            <td>Matricula</td>
                            <td>Curso</td>
                            <td>E-mail</td>
                        </tr>
                        <tr className="user-container">
                            <td>{user.matricula}</td>
                            <td>{user.curso}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};
