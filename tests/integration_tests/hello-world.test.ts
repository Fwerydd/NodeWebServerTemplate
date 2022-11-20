import express from 'express'
import { agent } from "supertest";
import IntegrationHelpers from "../helper/integration-helper"

describe('Given I want to retrieve the base page', () => {
    let app: express.Application;
    let apiRoute: string;

    beforeAll(async () => {
        app = await IntegrationHelpers.getApp();
        apiRoute = "/";
    });

    it('When I get the page', async () => {
        const response = await agent(app).get(apiRoute);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.title).toBeDefined();
        expect(response.body.title).toBe("Hello, world!");
    });
});