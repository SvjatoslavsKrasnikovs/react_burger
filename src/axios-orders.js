import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bae3a.firebaseio.com/'
});

export default instance;