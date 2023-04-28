"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryModel = exports.ProductModel = exports.StoreModel = exports.MarchantProfileModel = void 0;
const mongoose_1 = require("mongoose");
const Address = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: String },
});
const MerchantProfileSchema = new mongoose_1.Schema({
    uid: { type: String, required: false },
    email: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    productTypes: { type: [String], required: false },
    address: { type: Address, required: false },
});
const StoreSchema = new mongoose_1.Schema({
    ownerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MerchantProfile",
        required: true,
    },
    name: { type: String, required: true },
});
const Attribute = new mongoose_1.Schema({
    displayValue: { type: String, required: false },
    value: { type: String, required: false },
});
const Price = new mongoose_1.Schema({
    currency: { type: String, required: true },
    amount: { type: Number, required: true },
});
const ProductSchema = new mongoose_1.Schema({
    ownerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MerchantProfile",
        required: true,
    },
    name: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    gallery: { type: [String], required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    attributes: {
        type: new mongoose_1.Schema({
            name: String,
            type: String,
            items: [Attribute],
        }),
        required: false,
    },
    prices: { type: [Price], required: true },
    brand: { type: String, required: false },
});
const ProductCategorySchema = new mongoose_1.Schema({
    title: { type: [String], required: true },
});
const MarchantProfileModel = mongoose_1.models.MarchantProfileModel ||
    (0, mongoose_1.model)("MerchantProfile", MerchantProfileSchema);
exports.MarchantProfileModel = MarchantProfileModel;
const StoreModel = mongoose_1.models.StoreModel || (0, mongoose_1.model)("Store", StoreSchema);
exports.StoreModel = StoreModel;
const ProductModel = mongoose_1.models.ProductModel || (0, mongoose_1.model)("Product", ProductSchema);
exports.ProductModel = ProductModel;
const ProductCategoryModel = mongoose_1.models.ProductCategory || (0, mongoose_1.model)("ProductCategory", ProductCategorySchema);
exports.ProductCategoryModel = ProductCategoryModel;
