import { signUp } from "../../services/authentication/register";
import { Result, signUpType } from "../../types";
import { logger } from "../../utils/logger";

interface signUpTypes {
  data: signUpType;
}

export const sign_up = async (_: any, { data }: signUpTypes) => {
  try {
    await signUp(data.email, data.password);
    return Result.Success;
  } catch (error: any) {
    logger(error);
  }
};

