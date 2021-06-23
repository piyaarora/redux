import axios from 'axios';

export default axios.create({
    baseURL:'https://fakestoreapi.com',
    headers: {"Access-Control-Allow-Origin": true}

})