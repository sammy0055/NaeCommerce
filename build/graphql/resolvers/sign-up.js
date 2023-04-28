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
exports.sign_up = void 0;
const schema_1 = require("../../mongoDB/schema");
const register_1 = require("../../services/authentication/register");
const types_1 = require("../../types");
const logger_1 = require("../../utils/logger");
const sign_up = (_, { data }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cognitoUser = yield (0, register_1.signUp)(data.email, data.password);
        const email = cognitoUser.getUsername();
        yield schema_1.MarchantProfileModel.create({ email: email });
        return types_1.Result.Success;
    }
    catch (error) {
        (0, logger_1.logger)(error);
    }
});
exports.sign_up = sign_up;
