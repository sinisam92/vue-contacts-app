import axios from 'axios';


    
        axios.defaults.baseURL = 'http://localhost:8000/api/'
        axios.defaults.headers.common['Accept'] = 'application/json';


export default new axios();