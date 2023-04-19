import books from "../../data/book";
import { uniqueIDScalar } from "../Scalars";
import { forgot_password } from "./auth/forgot-password";
import { merchant_mode_parent_resolver } from "./mode/merchant-mode";
import { resend_confirmationCode } from "./auth/send-email-verificationCode";
import { create_merchant_profile } from "./setup-merchant-profile";
import { create_merchant_store } from "./setup-merchant-store";
import { sign_in } from "./auth/sign-in";
import { sign_up } from "./auth/sign-up";
import { verify_email } from "./auth/verify-email";
import { product, products } from "./query-product";

const Query = {
  books: () => books,
  product: product,
  products:products
};

const Mutation = {
  signUp: sign_up,
  signIn: sign_in,
  verifyEmail: verify_email,
  resendEmailConfirmationCode: resend_confirmationCode,
  forgotPassword: forgot_password,
  merchantProfile: create_merchant_profile,
  merchantStore: create_merchant_store,
  merchantMode: merchant_mode_parent_resolver,
};

const Scalars = {
  UniqueID: uniqueIDScalar,
};
export default { ...Scalars, Query, Mutation };
