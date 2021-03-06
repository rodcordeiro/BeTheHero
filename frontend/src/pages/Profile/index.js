import React, { useState,useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    
    const history = useHistory();

    const ong_id = localStorage.getItem('ongId');
    const token = localStorage.getItem('user_token');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('/bth/profile',{
            headers: {
                ong_id,
                token
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ong_id,token]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`/bth/incidents/${id}`,{
                headers: {
                    ong_id,
                    token
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err){
            alert('Erro ao deletar caso.');
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/');
    }
    return (
         <div className='profile-container'>
             <header>
                <img src={logoImg} alt='logo'/>
                <span>Bem vindo(a) á {ongName}</span>
                <Link to={'/incidents/new'} className='button'>Cadastrar novo incidente</Link>
                <button onClick={handleLogout}><FiPower size={18} color="#e02041"/></button>

             </header>
             <h1>Casos cadastrados</h1>
             <ul>
             {incidents.map(incident=> (
                 <li key={incident.id}>
                 <strong>CASO:</strong>
                 <p>{incident.title}</p>

                 <strong>DESCRIÇÃO:</strong>
                 <p>{incident.description}</p>

                 <strong>VALOR:</strong>
                 <p>{Intl.NumberFormat('pt-Br',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                 <button type='button' onClick={() => handleDeleteIncident(incident.id)}><FiTrash2 size={20} color="#a8a8b3"/></button>
             </li>
         
             ))}
             </ul>
         </div>
     );
 }