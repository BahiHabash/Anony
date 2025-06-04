import express from 'express';

function createApp() {
    const app = express();

    app.get('/', (req, res, next) => res.send('Welcome To The Server 😍.'));

    return app;
}

export default createApp;