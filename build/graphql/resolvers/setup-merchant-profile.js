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
exports.create_merchant_profile = void 0;
const schema_1 = require("../../mongoDB/schema");
const types_1 = require("../../types");
const create_merchant_profile = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.MarchantProfileModel.findOneAndUpdate({ email: args.merchantProfile.uid }, // Search criteria
        args.merchantProfile, // Update document
        { upsert: true, new: true } // Options
        );
        return types_1.Result.Success;
    }
    catch (error) {
        console.log("error", error === null || error === void 0 ? void 0 : error.message);
        return error === null || error === void 0 ? void 0 : error.message;
    }
});
exports.create_merchant_profile = create_merchant_profile;
