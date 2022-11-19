import express from 'express'

import config from './config/index';
import loader from './loaders/index';

async function startServer() {
    const app = express();

    // Loaders
    await loader(app);

    // Launch the server
    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}.`);
    });
}

startServer();