import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001/api",
    // withCredentials: true,
});

export const googleAuth = (code) => api.post(`auth/google`,{code});