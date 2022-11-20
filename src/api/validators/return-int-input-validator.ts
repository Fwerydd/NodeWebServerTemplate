const { body } = require("express-validator");

export const returnIntInputValidateChainMethod = [
    body("int")
        .exists({ checkFalsy: true })
        .isInt()
];