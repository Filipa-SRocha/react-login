import axios from 'axios';

const api = axios.create({
	baseURL: 'https://dbc-pessoa-api.herokuapp.com/',
});

export default api;
