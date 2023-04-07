import { MarchantProfileModel } from "../../mongoDB/schema";
import { IMerchantProfile } from "../../mongoDB/types";
import { Result } from "../../types";

type Profile = {
  merchantProfile: IMerchantProfile;
};

export const create_merchant_profile = async (
  _: any,
  args: Profile
): Promise<string> => {
  try {
    await MarchantProfileModel.findOneAndUpdate(
      { email: args.merchantProfile.uid }, // Search criteria
      args.merchantProfile, // Update document
      { upsert: true, new: true } // Options
    );
    return Result.Success;
  } catch (error: any) {
    console.log("error", error?.message);
    return error?.message;
  }
};
