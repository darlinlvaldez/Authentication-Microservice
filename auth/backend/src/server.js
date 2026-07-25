import express from 'express';
import auth from './routes/auth.js';
import apps from './routes/app.js';
import config from '../config.js';
import cors from 'cors'
import authenticated from './middlewares/validateToken.js';

const server = {}

server.run = () => {
    const app = express(); 
    app.disable('x-powered-by');
    app.use(express.json());

    app.use(cors())
    
    app.use(authenticated())
    app.use('/api/auth', auth); 
    app.use('/api/apps', apps); 

    app.listen(config.PORT || 4000, () => {
        console.log(`Example app listening on port ${config.PORT || 4000}`);
    });
}

export default server;