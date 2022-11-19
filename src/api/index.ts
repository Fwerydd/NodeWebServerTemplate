import express from 'express';

import helloWorld from './hello_world';
import returnIntInput from './return_int_input';

export default async (app: express.Application) => {
    await helloWorld(app);
    await returnIntInput(app);
}