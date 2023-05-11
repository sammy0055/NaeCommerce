"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../../data/book"));
const add_product_1 = require("./add-product");
const forgot_password_1 = require("./forgot-password");
const send_email_verificationCode_1 = require("./send-email-verificationCode");
const setup_merchant_profile_1 = require("./setup-merchant-profile");
const setup_merchant_store_1 = require("./setup-merchant-store");
const sign_in_1 = require("./sign-in");
const sign_up_1 = require("./sign-up");
const verify_email_1 = require("./verify-email");
const Query = {
    books: () => book_1.default,
};
const Mutation = {
    signUp: sign_up_1.sign_up,
    signIn: sign_in_1.sign_in,
    verifyEmail: verify_email_1.verify_email,
    resendEmailConfirmationCode: send_email_verificationCode_1.resend_confirmationCode,
    forgotPassword: forgot_password_1.forgot_password,
    merchantProfile: setup_merchant_profile_1.create_merchant_profile,
    merchantStore: setup_merchant_store_1.create_merchant_store,
    addProduct: add_product_1.add_product,
};
exports.default = { Query, Mutation };
