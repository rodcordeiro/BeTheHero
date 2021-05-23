import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            number,
            city,
            uf,
        }

        try {
            const response =  await api.post('ongs',data);
            alert(`Seu ID de acesso é: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

    }
    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Logo'/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>

                    <Link to='/' className='back-link'>
                        <FiArrowLeft size={16} color="#e02041" />
                        Já tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder='Nome da ONG'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder='E-mail'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <input 
                        placeholder='Senha'
                        type='password'
                        value={password}
                        onChange={e => SetPassword(e.target.value)}/>
                    <input 
                        placeholder='Whatsapp'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <div className='input-group'>
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder='UF' style={{width: 80}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className='button'>Cadastrar</button>

                </form>
            </div>
        </div>
    );
}