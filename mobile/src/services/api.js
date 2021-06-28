import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rodcordeiro.herokuapp.com/'
});

export default api;