import { MarchantProfileModel } from "../../../mongoDB/schema";
import { signUp } from "../../../services/authentication/register";
import { Result, signUpType } from "../../../types";
import { logger } from "../../../utils/logger";

interface signUpTypes {
  data: signUpType;
}

export const sign_up = async (_: unknown, { data }: signUpTypes) => {
  try {
    const cognitoUser = await signUp(data.email, data.password);
    const email = cognitoUser.getUsername();
    await MarchantProfileModel.create({ email: email });
    return Result.Success;
  } catch (error: any) {
    logger(error);
  }
};
