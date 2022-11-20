import { body, validationResult } from 'express-validator';
import express from 'express';

import IntInputService from '../services/int-input-service';

export default async (app: express.Application) => {
    app.post(
        '/input',
        body('int').isInt(),
        (req, res) => {
            try {
                validationResult(req).throw();
                const result = IntInputService.save(req.body.int);
                res.json({ input: result });
            } catch (err) {
                res.status(400).json({ error: err });
            }
        });
}