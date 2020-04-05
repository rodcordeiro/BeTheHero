import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cordeiro-bethehero-backend.herokuapp.com'
});

export default api;