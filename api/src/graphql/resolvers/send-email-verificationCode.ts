import { resendEmailConfirmationCode } from "../../services/authentication/confirm-registration";
import { Result } from "../../types";
import { logger } from "../../utils/logger";

type ConfirmationCode = {
  userName: string;
};
export const resend_confirmationCode = async (
  _: unknown,
  { userName }: ConfirmationCode
): Promise<string> => {
  try {
    await resendEmailConfirmationCode(userName);
    return Result.Success;
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
