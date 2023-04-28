"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
const poll_data_1 = require("../../data/poll-data");
function signUp(email, password) {
    const userPool = new amazon_cognito_identity_js_1.CognitoUserPool(poll_data_1.poolData);
    const attributeList = [];
    const dataEmail = {
        Name: "email",
        Value: email,
    };
    const attributeEmail = new amazon_cognito_identity_js_1.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);
    return new Promise((resolve, reject) => {
        userPool.signUp(email, password, attributeList, attributeList, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                const cognitoUser = result === null || result === void 0 ? void 0 : result.user;
                resolve(cognitoUser);
            }
        });
    });
}
exports.signUp = signUp;
