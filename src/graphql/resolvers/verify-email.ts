import { confirmRegistration } from "../../services/authentication/confirm-registration";
import { logger } from "../../utils/logger";

type verifyEmail = {
  verificationData: {
    userName: string;
    authCode: string;
  };
};

export const verify_email = async (
  _: any,
  { verificationData }: verifyEmail
): Promise<string> => {
  try {
    const res = await confirmRegistration(
      verificationData.userName,
      verificationData.authCode
    );
    return res as string;
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
