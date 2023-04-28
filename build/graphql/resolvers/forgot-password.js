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
exports.forgot_password = void 0;
const change_user_password_1 = require("../../services/authentication/change-user-password");
const types_1 = require("../../types");
const logger_1 = require("../../utils/logger");
const forgot_password = (_, { userName }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, change_user_password_1.forgotPassword)(userName);
        return types_1.Result.Success;
    }
    catch (error) {
        (0, logger_1.logger)(error);
        return error === null || error === void 0 ? void 0 : error.message;
    }
});
exports.forgot_password = forgot_password;
