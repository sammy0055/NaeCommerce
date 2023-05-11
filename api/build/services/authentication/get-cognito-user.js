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
exports.getCognitoUser = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const poll_data_1 = require("../../data/poll-data");
const getCognitoUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const client = new client_cognito_identity_provider_1.CognitoIdentityProviderClient({ region: poll_data_1.AWS_REGION });
    let outPut = {};
    const input = {
        UserPoolId: poll_data_1.poolData.UserPoolId,
        Username: username,
    };
    const command = new client_cognito_identity_provider_1.AdminGetUserCommand(input);
    const result = yield client.send(command);
    (_a = result === null || result === void 0 ? void 0 : result.UserAttributes) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
        if (item.Name === "email")
            outPut.email = item.Value;
    });
    return outPut;
});
exports.getCognitoUser = getCognitoUser;
