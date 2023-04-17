const AddressFields = `
street:String
city:String
state:String
country:String
zipCode:String
`;

const MerchantProfileFields = `
firstName:String
lastName:String
productTypes:[String]
`;

const CurrencyFields = `
label:String
symbol:String
`

const MerchantStoreFields = `
name:String
region:String
`

const AttributeFields = `
displayValue: String
value: String
`;

const AttributeSetFields = `
name: String
type: String
`;

const ProductFields = `
title: String!
description: String!
category: String!
brand: String
quantity: Int!
active: Boolean!
`;

// const removeInputValues = (values: string) => {
//   const lines = values.split("\n");
//   const newValue = lines
//     .filter((value) => !value.includes("%input%"))
//     .join("\n");
// };

const typeDefs = `#graphql
scalar UniqueID
enum ResponseStatus {
  SUCCESS
  FAILED
}

enum RegistrationSteps {
  SIGNUP
  USERINFO
  NAMESTORE
  STORETYPE
  STOREREGION
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

  type Attribute {
   _id: String!
    ${AttributeFields}
  }

  type AttributeSet {
    _id: String!
    items: [Attribute]
    ${AttributeSetFields}
  }

  type ProductData {
    _id: UniqueID!,
    attributes: [AttributeSet]
    price: Float!
    gallery: [String]
    inStock: Boolean
    ${ProductFields}
  }

  type Product {
    currency: Currency!
    data: ProductData!
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

  input RegisterInput {
    email: String
    password: String
  }

  input AuthenticationDataInput {
    userName: String
    password: String
  }

  input VerifyEmailInput {
    userName: String
    authCode: String
  }

  input AddressInput {
    ${AddressFields}
  }

  input MerchantProfileInput {
    address:AddressInput
    registrationStep: RegistrationSteps
    ${MerchantProfileFields}
  }

  input CurrencyInput {
    label: String!,
    symbol: String!
  }

  input AttributeInput {
    ${AttributeFields}
  }

  input AttributeSetInput {
    items: [AttributeInput]
    ${AttributeSetFields}
  }

  input ProductInput {
    storeId: UniqueID
    data: ProductDataInput!
  }

  input ProductDataInput {
    attributes: [AttributeSetInput]
    price: Float!
    ${ProductFields}
  }

  input ProductFiltersInput {
    title: String
    category: String
    price: Float
  }

  input CurrencyInput {
    ${CurrencyFields}
  }

  input merchantStoreInput {
    currency: CurrencyInput
    ${MerchantStoreFields}
  }

  type MerchantModeMutation {
    addProduct(product: ProductInput!): Product
    updateOneProduct(_id:UniqueID!, data: ProductDataInput!): Product
    deleteOneProduct(_id: UniqueID!): ResponseStatus
  }

  type Query {
    books: [Book]
    categories: [Category],
    category(input: CategoryInput): Category
    product(_id: UniqueID!): Product
    products(filters: ProductFiltersInput): [ProductData]
    currencies: [Currency]
  }

  type Mutation {
    signUp(data: RegisterInput): ResponseStatus
    signIn(authenticationData: AuthenticationDataInput): UserAuthAccessDetails
    verifyEmail(verificationData: VerifyEmailInput): ResponseStatus
    resendEmailConfirmationCode(userName: String): ResponseStatus
    forgotPassword(userName: String): ResponseStatus
    merchantProfile(merchantProfile: MerchantProfileInput): ResponseStatus
    merchantStore(name: String): ResponseStatus
    merchantMode: MerchantModeMutation
  }
`;

export default typeDefs;
