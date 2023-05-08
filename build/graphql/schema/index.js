"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address = `
street:String
city:String
state:String
country:String
zipCode:String
`;
const MerchantProfile = `
firstName:String
lastName:String
productTypes:[String]
`;
const Attribute = `
displayValue: String
value: String
`;
const AttributeSet = `
name: String
type: String
`;
const Product = `
title: String!
inStock: Boolean
gallery: [String]
description: String!
category: String!
brand: String
`;
const inputFields = (fieldsSpec) => fieldsSpec.replace(/%Input%/g, "Input");
const typeFields = (fieldsSpec) => fieldsSpec.replace(/%Input%/g, "");
const typeDefs = `#graphql

enum ResponseStatus {
  SUCCESS
  FAILED
}
  type Book {
    title: String
    author: String
  }

  type UserAuthAccessDetails {
    exp: Int
    accessToken: String
    refreshToken: String
  }

  type Price {
    currency: Currency!,
    amount: Float!
  }

  type Attribute {
   _id: String!
    ${Attribute}
  }

  type AttributeSet {
    _id: String!
    items: [Attribute]
    ${AttributeSet}
  }

  type Product {
    _id: String!,
    attributes: [AttributeSet]
    price: Price!
    ${Product}
  }

  type Category {
    name: String,
    products: [Product]!
}

  type Currency {
    label: String!,
    symbol: String!
  }

  input CategoryInput {
    title: String!
  }

  input Register {
    email: String
    password: String
  }

  input AuthenticationData {
    userName: String
    password: String
  }

  input VerifyEmail {
    userName: String
    authCode: String
  }

  input AddressInput {
    ${Address}
  }

  input MerchantProfileInput {
    address:AddressInput
    ${MerchantProfile}
  }

  input CurrencyInput {
    label: String!,
    symbol: String!
  }

  input PriceInput {
    currency: CurrencyInput!,
    amount: Float!
  }

  input AttributeInput {
    ${Attribute}
  }

  input AttributeSetInput {
    items: [AttributeInput]
    ${AttributeSet}
  }

  input ProductInput {
    attributes: [AttributeSetInput]
    price: PriceInput!
    ${Product}
  }

  type Query {
    books: [Book]
    categories: [Category],
    category(input: CategoryInput): Category
    product(id: String!): Product
    currencies: [Currency]
  }

  type Mutation {
    signUp(data: Register): ResponseStatus
    signIn(authenticationData: AuthenticationData): UserAuthAccessDetails
    verifyEmail(verificationData: VerifyEmail): ResponseStatus
    resendEmailConfirmationCode(userName: String): ResponseStatus
    forgotPassword(userName: String): ResponseStatus
    merchantProfile(merchantProfile: MerchantProfileInput): ResponseStatus
    merchantStore(name: String): ResponseStatus
    addProduct(product: ProductInput!): Product
  }
`;
exports.default = typeDefs;
