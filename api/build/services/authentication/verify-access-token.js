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
exports.verifyAccessToken = void 0;
const aws_jwt_verify_1 = require("aws-jwt-verify");
const poll_data_1 = require("../../data/poll-data");
const verifyAccessToken = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    const verifier = aws_jwt_verify_1.CognitoJwtVerifier.create({
        userPoolId: poll_data_1.poolData.UserPoolId,
        tokenUse: "access",
        clientId: poll_data_1.poolData.ClientId,
    });
    const payload = yield verifier.verify(accessToken);
    return payload;
});
exports.verifyAccessToken = verifyAccessToken;
