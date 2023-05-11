"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cognito_user_1 = require("../../utils/cognito-user");
const getUserAttributes = (username) => {
    const cognitoUser = (0, cognito_user_1.cognitoUserFn)(username);
};
