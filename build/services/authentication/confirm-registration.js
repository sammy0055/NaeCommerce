"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendEmailConfirmationCode = exports.confirmRegistration = void 0;
const cognito_user_1 = require("../../utils/cognito-user");
const confirmRegistration = (username, authCode) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(username);
    return new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(authCode, true, function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports.confirmRegistration = confirmRegistration;
const resendEmailConfirmationCode = (username) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(username);
    return new Promise((resolve, reject) => {
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports.resendEmailConfirmationCode = resendEmailConfirmationCode;
