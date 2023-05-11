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
exports.create_merchant_store = void 0;
const schema_1 = require("../../mongoDB/schema");
const types_1 = require("../../types");
const logger_1 = require("../../utils/logger");
const create_merchant_store = (_, { name }, contextValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield contextValue.token();
        const merchantProfile = yield schema_1.MarchantProfileModel.findOne({
            sub: token.sub,
        }, { _id: 1 }).lean();
        if (!merchantProfile)
            return types_1.Result.Fail;
        const storeId = yield schema_1.StoreModel.findOneAndUpdate({ name }, { MerchantProfileId: merchantProfile._id, name }, { upsert: true, setDefaultsOnInsert: true, new: true })
            .select("_id")
            .lean();
        yield schema_1.MarchantProfileModel.updateOne({ sub: token.sub }, { $addToSet: { storesId: storeId._id } });
        return types_1.Result.Success;
    }
    catch (error) {
        (0, logger_1.logger)(error);
        return types_1.Result.Fail;
    }
});
exports.create_merchant_store = create_merchant_store;
