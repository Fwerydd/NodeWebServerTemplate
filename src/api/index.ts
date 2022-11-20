import express from 'express';

import helloWorld from './hello-world';
import returnIntInput from './return-int-input';

export default async (app: express.Application) => {
    await helloWorld(app);
    await returnIntInput(app);
}