import { resendEmailConfirmationCode } from "../../services/authentication/confirm-registration";
import { logger } from "../../utils/logger";

type ConfirmationCode = {
  userName: string;
};
export const resend_confirmationCode = async (
  _: any,
  { userName }: ConfirmationCode
): Promise<string> => {
  try {
    await resendEmailConfirmationCode(userName);
    return "SUCCESS";
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
