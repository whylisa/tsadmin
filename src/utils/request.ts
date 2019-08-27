import axios from 'axios';
import { Message, MessageBox } from 'element-ui';

const service = axios.create({
    baseUrl: 'localhost::::',
    timeout: 5000,
});
service.interceptors.request.use( ( config: any ) => {
    config.headers['X-Access-Token'] = 'fndsfas';
});
service.interceptors.response.use( ( respose: any ) => {
    const res = respose.data;
    if ( res.code !== 200 ) {
        Message({
            message: res.message || 'error',
            type: 'error',
            duration: 3 * 1000,
        });
    }
    
});

