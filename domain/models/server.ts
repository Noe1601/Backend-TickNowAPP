import express, { Application } from 'express';
import userRouter from '../../infraestructure/routes/users.routes';
import authRouter from '../../infraestructure/routes/auth.routes';
import codeRouter from '../../infraestructure/routes/code.routes';
import stablishmentRouter from '../../infraestructure/routes/stablishment.routes';
import workerRouter from '../../infraestructure/routes/worker.routes';
import cors from 'cors';
import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;

    private paths = {
        users: '/api/users',
        auth: '/api/auth',
        code: '/api/code',
        stablishment: '/api/stablishment',
        workers: '/api/workers'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
        } catch (error) {
            throw new Error('Error');
        }
    }

    routes(){
        this.app.use( this.paths.users, userRouter);
        this.app.use( this.paths.auth, authRouter );
        this.app.use( this.paths.code, codeRouter );
        this.app.use( this.paths.stablishment, stablishmentRouter );
        this.app.use( this.paths.workers, workerRouter );
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }
    
}


export default Server;