"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const poll_data_1 = require("../../data/poll-data");
const poll_data_2 = require("../../data/poll-data");
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const login = (authenticationData) => __awaiter(void 0, void 0, void 0, function* () {
    const cognitoClient = new client_cognito_identity_provider_1.CognitoIdentityProviderClient({
        region: poll_data_2.AWS_REGION,
    });
    const command = new client_cognito_identity_provider_1.AdminInitiateAuthCommand({
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        ClientId: poll_data_1.poolData.ClientId,
        UserPoolId: poll_data_1.poolData.UserPoolId,
        AuthParameters: {
            USERNAME: authenticationData.userName,
            PASSWORD: authenticationData.password,
        },
    });
    const { AuthenticationResult } = yield cognitoClient.send(command);
    return {
        exp: AuthenticationResult === null || AuthenticationResult === void 0 ? void 0 : AuthenticationResult.ExpiresIn,
        accessToken: AuthenticationResult === null || AuthenticationResult === void 0 ? void 0 : AuthenticationResult.AccessToken,
        refreshToken: AuthenticationResult === null || AuthenticationResult === void 0 ? void 0 : AuthenticationResult.RefreshToken,
    };
});
exports.login = login;
