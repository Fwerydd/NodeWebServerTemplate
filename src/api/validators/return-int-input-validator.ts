import { body } from 'express-validator';

export const returnIntInputValidateChainMethod = [
    body("int")
        .exists({ checkFalsy: true })
        .isInt()
];