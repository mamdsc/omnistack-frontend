import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-mariana-backend.herokuapp.com'
});

export default api;