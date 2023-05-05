import { Schema, model, models } from "mongoose";
import type { Address, IMerchantProfile, IStore, IProduct } from "./types";

const Address = new Schema<Address>({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipCode: { type: String },
});

const MerchantProfileSchema: Schema = new Schema<IMerchantProfile>({
  sub: { type: String, required: false },
  email: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  productTypes: { type: [String], required: false },
  address: { type: Address, required: false },
});

const StoreSchema: Schema = new Schema<IStore>({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "MerchantProfile",
    required: true,
  },
  name: { type: String, required: true },
});

const Attribute = new Schema({
  displayValue: { type: String, required: false },
  value: { type: String, required: false },
});

const ProductSchema: Schema = new Schema<IProduct>({
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  title: { type: String, required: false },
  inStock: { type: Boolean, required: false },
  gallery: { type: [String], required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  attributes: {
    type: new Schema({
      name: String,
      type: String,
      items: [Attribute],
    }),
    required: false,
  },
  price: { type: Number, required: false },
  brand: { type: String, required: false },
});

const ProductCategorySchema = new Schema({
  title: { type: [String], required: true },
});

const MarchantProfileModel =
  models.MarchantProfileModel ||
  model<IMerchantProfile>("MerchantProfile", MerchantProfileSchema);
const StoreModel = models.StoreModel || model<IStore>("Store", StoreSchema);
const ProductModel =
  models.ProductModel || model<IProduct>("Product", ProductSchema);

const ProductCategoryModel =
  models.ProductCategory || model("ProductCategory", ProductCategorySchema);

export { MarchantProfileModel, StoreModel, ProductModel, ProductCategoryModel };
