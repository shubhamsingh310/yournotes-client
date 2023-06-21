import axios from 'axios';

export default axios.create({
    baseURL:'https://yournotes-api.onrender.com/api',
    headers:{
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('Token') || ''}`
    }
})