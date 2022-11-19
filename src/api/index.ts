import express from 'express';

import helloWorld from './hello_world';

export default async (app: express.Application) => {
    await helloWorld(app);
}