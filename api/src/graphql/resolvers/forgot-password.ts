import { forgotPassword } from "../../services/authentication/change-user-password";
import { Result } from "../../types";
import { logger } from "../../utils/logger";

type forgotPassword = {
    userName: string;
};

export const forgot_password = async (
  _: string,
  { userName }: forgotPassword
): Promise<string> => {
  try {
    await forgotPassword(userName);
    return Result.Success;
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
