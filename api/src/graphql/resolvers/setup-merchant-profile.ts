import { MarchantProfileModel } from "../../mongoDB/schema";
import { IMerchantProfile } from "../../mongoDB/types";
import { getCognitoUser } from "../../services/authentication/get-cognito-user";
import { RegistrationSteps, Result, contextDetails } from "../../types";
import { logger } from "../../utils/logger";
type Profile = {
  merchantProfile: Omit<IMerchantProfile, "email" | "sub">;
};

//# use this only during account setup
export const create_merchant_profile = async (
  _: unknown,
  args: Profile,
  contextValue: contextDetails
): Promise<string> => {
  try {
    const token = await contextValue.token();
    const response = await getCognitoUser(token.username);
    const data = {
      ...args.merchantProfile,
      sub: token.sub,
      completedRegistration:
        args?.merchantProfile?.registrationStep ===
        RegistrationSteps.STOREREGION
          ? true
          : false,
    };
    await MarchantProfileModel.findOneAndUpdate(
      { email: response.email }, // Search criteria
      data, // Update document
      { upsert: true, new: true } // Options
    );
    return Result.Success;
  } catch (error: any) {
    logger(error);
    return error?.message;
  }
};
