"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = void 0;
const cognito_user_1 = require("../../utils/cognito-user");
const verifyEmail = (code, username) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(username);
    return new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(code, true, function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports.verifyEmail = verifyEmail;
