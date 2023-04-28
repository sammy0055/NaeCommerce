"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
const cognito_user_1 = require("../../utils/cognito-user");
const login = (authenticationData) => {
    const Data = {
        Username: authenticationData.userName,
        Password: authenticationData.password,
    };
    const authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails(Data);
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(authenticationData.userName);
    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                const res = {
                    exp: result.getAccessToken().payload.exp,
                    uid: result.getAccessToken().payload.sub,
                    accessToken: result.getAccessToken().getJwtToken(),
                    refreshToken: result.getRefreshToken().getToken(),
                };
                resolve(res);
            },
            onFailure: (error) => reject(error),
        });
    });
};
exports.login = login;
