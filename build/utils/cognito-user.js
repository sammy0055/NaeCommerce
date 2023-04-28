"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cognitoUserFn = void 0;
const amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
const poll_data_1 = require("../data/poll-data");
const cognitoUserFn = (username) => {
    const userPool = new amazon_cognito_identity_js_1.CognitoUserPool(poll_data_1.poolData);
    const userData = {
        Username: username,
        Pool: userPool,
    };
    const cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
    return cognitoUser;
};
exports.cognitoUserFn = cognitoUserFn;
