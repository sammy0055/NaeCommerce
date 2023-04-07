import { Schema, Document } from "mongoose";
type SpecificProductTypes = Array<
  "dropshipping-product" | "handmade-product" | "stringThree"
>;
type ObjectId = Schema.Types.ObjectId;

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
interface IMerchantProfile extends Document {
  uid: String;
  email: string;
  firstName: string;
  lastName: string;
  productTypes: string[];
  address: Address;
}

interface IStore extends Document {
  ownerId: ObjectId;
  name: string;
}

interface Attribute extends Document {
  displayValue: string;
  value: string;
}

interface Price extends Document {
  currency: string;
  amount: number;
}

interface IProduct extends Document {
  ownerId: ObjectId;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: {
    name: string;
    type: string;
    items: Attribute[];
  };
  prices: Price[];
  brand: string;
}

export { IMerchantProfile, IStore, Address, IProduct };
