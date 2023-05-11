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
exports.sign_in = void 0;
const login_1 = require("../../services/authentication/login");
const logger_1 = require("../../utils/logger");
const sign_in = (_, { authenticationData }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0, login_1.login)(authenticationData);
    }
    catch (error) {
        (0, logger_1.logger)(error);
        return error === null || error === void 0 ? void 0 : error.message;
    }
});
exports.sign_in = sign_in;
