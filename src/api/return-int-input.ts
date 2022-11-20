import { validationResult } from 'express-validator';
import express from 'express';

import IntInputService from '../services/int-input-service';
import { returnIntInputValidateChainMethod } from './validators/return-int-input-validator';

export default async (app: express.Application) => {
    app.post(
        '/input',
        returnIntInputValidateChainMethod,
        (req: express.Request, res: express.Response) => {
            try {
                validationResult(req).throw();
                const result = IntInputService.save(req.body.int);
                res.json({ input: result });
            } catch (err) {
                res.status(400).json({ error: err });
            }
        });
}