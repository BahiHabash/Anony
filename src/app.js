import express from 'express';
import globalErrorHandler from './errors/globalErrorHandler.js';

function createApp() {
    const app = express();

    app.get('/', (req, res) => res.send('Welcome To The Server 😍.'));

    app.use(globalErrorHandler);

    return app;
}

export default createApp;