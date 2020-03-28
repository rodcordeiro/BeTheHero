import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Profile(){
     return (
         <div className='profile-container'>
             <header>
                <img src={logoImg} alt='logo'/>
                <span>Bem vindo(a) á APAD</span>
                <Link to={'/incidents/new'} className='button'>Cadastrar novo incidente</Link>
                <button><FiPower size={18} color="#e02041"/></button>

             </header>
             <h1>Casos cadastrados</h1>
             <ul>
             <li>
                     <strong>CASO:</strong>
                     <p>Caso Teste</p>

                     <strong>DESCRIÇÃO:</strong>
                     <p>DESCRIÇÃO teste</p>

                     <strong>VALOR:</strong>
                     <p>R$ 120,00</p>

                     <button type='button'><FiTrash2 size={20} color="#a8a8b3"/></button>
                 </li>
                 <li>
                     <strong>CASO:</strong>
                     <p>Caso Teste</p>

                     <strong>DESCRIÇÃO:</strong>
                     <p>DESCRIÇÃO teste</p>

                     <strong>VALOR:</strong>
                     <p>R$ 120,00</p>

                     <button type='button'><FiTrash2 size={20} color="#a8a8b3"/></button>
                 </li>
                 <li>
                     <strong>CASO:</strong>
                     <p>Caso Teste</p>

                     <strong>DESCRIÇÃO:</strong>
                     <p>DESCRIÇÃO teste</p>

                     <strong>VALOR:</strong>
                     <p>R$ 120,00</p>

                     <button type='button'><FiTrash2 size={20} color="#a8a8b3"/></button>
                 </li>
                 <li>
                     <strong>CASO:</strong>
                     <p>Caso Teste</p>

                     <strong>DESCRIÇÃO:</strong>
                     <p>DESCRIÇÃO teste</p>

                     <strong>VALOR:</strong>
                     <p>R$ 120,00</p>

                     <button type='button'><FiTrash2 size={20} color="#a8a8b3"/></button>
                 </li>
             </ul>
         </div>
     );
 }