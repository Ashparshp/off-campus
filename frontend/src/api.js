import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:3001/api",
    baseURL: "https://off-campus.onrender.com/api",
    // withCredentials: true,
});

export const googleAuth = (code) => api.post(`auth/google`,{code});