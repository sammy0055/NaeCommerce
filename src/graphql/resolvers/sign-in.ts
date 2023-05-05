import { login } from "../../services/authentication/login";
import { authenticationData, userAuthAccessDetails } from "../../types";
import { logger } from "../../utils/logger";

type Login = {
  authenticationData: authenticationData;
};
export const sign_in = async (
  _: unknown,
  { authenticationData }: Login
): Promise<userAuthAccessDetails> => {
  try {
    return await login(authenticationData);
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
