import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();
    const ong_id = localStorage.getItem('ongId');
    const token = localStorage.getItem('user_token');

    const history = useHistory();
    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }
        try{
          await api.post('/bth/incidents', data,{
              headers: {
                ong_id,
                token
            }
          })
          history.push('/profile');
        } catch(err){
            console.log(err)
            alert("Erro ao criar. Por favor, tente novamente mais tarde")
        }
    }

    return (
            
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Logo'/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link to='/profile' className='back-link'>
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder='Titulo do caso'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder='Descrição' 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder='Valor em reais'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className='button'>Cadastrar</button>

                </form>
            </div>
        </div>
    
    );
}