"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = exports.changeUserPassword = void 0;
const cognito_user_1 = require("../../utils/cognito-user");
const changeUserPassword = (PasswordDetail) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(PasswordDetail.username);
    return new Promise((resolve, reject) => {
        cognitoUser.changePassword(PasswordDetail.oldPassword, PasswordDetail.newPassword, function (err, result) {
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports.changeUserPassword = changeUserPassword;
const forgotPassword = (username) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(username);
    return new Promise((resolve, reject) => {
        cognitoUser.forgotPassword({
            onSuccess: function (data) {
                resolve(data);
            },
            onFailure: function (err) {
                reject(err);
            },
        });
    });
};
exports.forgotPassword = forgotPassword;
