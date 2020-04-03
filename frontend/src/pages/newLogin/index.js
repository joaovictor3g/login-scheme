import React, {  useEffect ,useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';

import './styles.css';

export default function NewLogin() {
    const [courses, setCourses] = useState([]);
    const [id_curso, setIndex] = useState(0);
    const [nome_login, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');  

    const history = useHistory();

    useEffect(() => {
        fillComboBox();
    }, []);

    async function fillComboBox() {
        const response = await api.get('/list');

        setCourses(response.data);
    }

    async function createNewLogin(e) {
        e.preventDefault();

        if(id_curso === 0 || !nome_login || !email || !senha) {
            alert('Preencha todos os campos corretamente');
            return;
        }

        const data = {
            nome_login,
            email,
            senha,
            id_curso
        };  

        try {
            const response = await api.post('/new', data);

            console.log(response.data);

            console.log(id_curso);
            
            alert(`Deu certo, sua matrícula: ${response.data.matricula}`);

        } catch(err) {
            alert('erro');
        }

    }

    function returnToMenu() {
        history.push('/');
    }

    function myProfileOnGithub() {
        window.open('http://github.com/joaovictor3g/login-scheme');
    }

    return (
        <>
        <header className="back-to-principal">
            <FiArrowLeft size={33} onClick={returnToMenu}/>
            <p>SAPPI</p>
            <aside>
                <GoMarkGithub size={30} onClick={myProfileOnGithub}/>
                </aside>
        </header>
        <div className="principal-container">
            <header>Novo Login</header>
            <form onSubmit={createNewLogin} >
                <input 
                    placeholder="Digite seu nome" 
                    className="first-input"
                    onChange={e => setNome(e.target.value)}
                    value={nome_login}
                />
                <input
                    onChange={e => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    value={email}
                />
                <input 
                    onChange={e => setPass(e.target.value)}
                    type="password" 
                    placeholder="Defina uma senha" 
                    value={senha}
                />
                <select id="combo-box" onChange={e => setIndex(e.target.selectedIndex)}>
                    <option >Selecione seu curso</option>
                    {courses.map(course => (
                        <option key={course.id}>{course.nome_curso}</option>
                        
                    ))}
                </select>
                <button type="submit" className="first-button">Cadastrar</button>
                <button type="button">Limpar</button>
            </form>
        </div>
        </>
    )
}
