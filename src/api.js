import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/getstudent/', // Fixed URL with no space
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
