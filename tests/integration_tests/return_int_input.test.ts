import express from 'express'
import { agent } from "supertest";
import IntegrationHelpers from "../helper/integration-helper"

describe('Given I want to retrieve my input', () => {
    let app: express.Application;
    let apiRoute: string;

    beforeAll(async () => {
        app = await IntegrationHelpers.getApp();
        apiRoute = "/input";
    });

    it('When my input is an int', async () => {
        const response = await agent(app).post(apiRoute).send({ int: 5 });
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBeUndefined();
    });

    it('When my input is a stringified int', async () => {
        const response = await agent(app).post(apiRoute).send({ int: "5" });
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBeUndefined();
    });

    it('When my input is a string text', async () => {
        const response = await agent(app).post(apiRoute).send({ int: "ABCDEFG" });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBeDefined();
    });
});