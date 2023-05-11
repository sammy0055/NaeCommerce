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
  _id: ObjectId;
  sub: String;
  email: string;
  firstName: string;
  lastName: string;
  productTypes: string[];
  address: Address;
  storesId: ObjectId;
}

interface IStore extends Document {
  MerchantProfileId: ObjectId;
  name: string;
}

interface Attribute extends Document {
  displayValue: string;
  value: string;
}

interface IProduct extends Document {
  storeId: ObjectId;
  title: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: {
    name: string;
    type: string;
    items: Attribute[];
  };
  price: number;
  brand: string;
}

export { IMerchantProfile, IStore, Address, IProduct };
