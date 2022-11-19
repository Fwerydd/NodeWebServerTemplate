import express from 'express';

export default async (app: express.Application) => {
    app.get('/', (req, res) => { res.send({ title: 'Hello, world (again)!' }); });
}