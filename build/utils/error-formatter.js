"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cognitoErrors = void 0;
const cognitoErrors = (errCode, message) => {
    let error;
    switch (errCode) {
        case "UsernameExistsException":
            error = { message: "user already exists", code: "FORBIDDEN" };
            break;
        case "NotAuthorizedException":
            error = {
                message: "User cannot be confirmed. Current status is CONFIRMED",
                code: "NotAuthorizedException",
            };
            break;
        case "UserNotConfirmedException":
            error = {
                message: "User is not confirmed",
                code: "UserNotConfirmedException",
            };
        default:
            error = {
                message: "something went wrong please try again",
                code: "UNKWON",
            };
            break;
    }
    return error;
};
exports.cognitoErrors = cognitoErrors;
