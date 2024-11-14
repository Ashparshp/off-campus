import axios from 'axios';

export const baseURL = "http://localhost:3001";

const api = axios.create({
    // baseURL: "http://localhost:3001/api",
    // baseURL: "https://off-campus.onrender.com/api",
    baseURL : "https://off-campus.in/api",
    // withCredentials: true,
});

export const googleAuth = (code) => api.post(`auth/google?code=${code}`,{code});