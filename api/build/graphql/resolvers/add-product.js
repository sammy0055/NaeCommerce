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
exports.add_product = void 0;
const logger_1 = require("../../utils/logger");
const add_product = (_, args, contextValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield contextValue.token();
        if (!token)
            throw new Error("access denied, please logIn");
        // const product = await ProductModel.create({ ...args });
        console.log("args", args);
        return args.product;
    }
    catch (error) {
        (0, logger_1.logger)(error);
    }
});
exports.add_product = add_product;
