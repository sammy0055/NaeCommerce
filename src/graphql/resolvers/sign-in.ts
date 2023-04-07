import { login } from "../../services/authentication/login";
import { authenticationData, userAuthAccessDetails } from "../../types";
import { logger } from "../../utils/logger";

type Login = {
  authenticationData: authenticationData;
};
export const sign_in = async (
  _: any,
  { authenticationData }: Login
): Promise<userAuthAccessDetails> => {
  try {
    const res = await login(authenticationData);
    return res;
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
