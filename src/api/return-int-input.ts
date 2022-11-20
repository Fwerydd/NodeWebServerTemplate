import { body, validationResult } from 'express-validator';
import express from 'express';

export default async (app: express.Application) => {
    app.post(
        '/input',
        body('int').isInt(),
        (req, res) => {
            try {
                validationResult(req).throw();
                res.json({ input: req.body.int });
            } catch (err) {
                res.status(400).json({ error: err });
            }
        });
}