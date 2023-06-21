import axios from 'axios';

export default axios.create({
    baseURL:'https://keeper-api.onrender.com/api',
    headers:{
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('Token') || ''}`
    }
})