import { MarchantProfileModel } from "../../mongoDB/schema";
import { IMerchantProfile } from "../../mongoDB/types";
import { getCognitoUser } from "../../services/authentication/get-cognito-user";
import { Result, contextDetails } from "../../types";
type Profile = {
  merchantProfile: Omit<IMerchantProfile, "email" | "sub">;
};

export const create_merchant_profile = async (
  _: unknown,
  args: Profile,
  contextValue: contextDetails
): Promise<string> => {
  try {
    const token = await contextValue.token();
    const response = await getCognitoUser(token.username);
    await MarchantProfileModel.findOneAndUpdate(
      { email: response.email }, // Search criteria
      { ...args.merchantProfile, sub: token.sub }, // Update document
      { upsert: true, new: true } // Options
    );
    return Result.Success;
  } catch (error) {
    if (error instanceof TypeError) return error?.message;
    else return Result.Fail;
  }
};
