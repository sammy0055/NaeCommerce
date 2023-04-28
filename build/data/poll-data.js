"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS_REGION = exports.poolData = void 0;
exports.poolData = {
    UserPoolId: process.env.AWS_COGNITO_USERPOOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
};
exports.AWS_REGION = process.env.AWS_REGION;
