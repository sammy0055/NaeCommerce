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
exports.resend_confirmationCode = void 0;
const confirm_registration_1 = require("../../services/authentication/confirm-registration");
const logger_1 = require("../../utils/logger");
const resend_confirmationCode = (_, { userName }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, confirm_registration_1.resendEmailConfirmationCode)(userName);
        return "SUCCESS";
    }
    catch (error) {
        (0, logger_1.logger)(error);
        return error === null || error === void 0 ? void 0 : error.message;
    }
});
exports.resend_confirmationCode = resend_confirmationCode;
