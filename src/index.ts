import express from 'express'

import config from './config/index';
import expressLoader from './loaders/express';

async function startServer() {
    const app = express();

    // Loaders
    await expressLoader(app);

    // Launch the server
    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}.`);
    });
}

startServer();