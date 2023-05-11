"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const graphql_1 = require("graphql");
const error_formatter_1 = require("./error-formatter");
const logger = (error) => {
    let _error;
    if (!error.code) {
        const tokenExp = /Token expired/.test(error === null || error === void 0 ? void 0 : error.message);
        if (tokenExp)
            _error = { message: "session expired please logIn" };
        else
            _error = (0, error_formatter_1.cognitoErrors)(error === null || error === void 0 ? void 0 : error.code, error === null || error === void 0 ? void 0 : error.message);
    }
    console.error({ code: error === null || error === void 0 ? void 0 : error.code, message: error.message });
    throw new graphql_1.GraphQLError(_error.message, {
        extensions: {
            code: error.code,
        },
    });
};
exports.logger = logger;
