import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-builder-36a5f.firebaseio.com/'
});

export default instance;