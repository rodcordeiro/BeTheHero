import React ,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className='logon-container'>
            <section className="form">
                <img src={logoImg} alt='Be the Hero'/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder='Sua id'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type='submit' className='button'>Entrar</button>

                    <Link to='/register' className='back-link'>
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        </div>
    );
}