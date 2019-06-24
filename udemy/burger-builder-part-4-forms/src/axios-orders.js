import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e64ae.firebaseio.com/'
});

export default instance;