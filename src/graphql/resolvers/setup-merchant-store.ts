import { MarchantProfileModel, StoreModel } from "../../mongoDB/schema";
import { Result, contextDetails } from "../../types";
import { logger } from "../../utils/logger";

export const create_merchant_store = async (
  _: unknown,
  { name }: { name: string },
  contextValue: contextDetails
): Promise<string> => {
  try {
    const token = await contextValue.token();
    const merchantProfile = await MarchantProfileModel.findOne({
      sub: token.sub,
    }).select("_id");
    await StoreModel.findOneAndUpdate(
      { name },
      { MerchantProfileId: merchantProfile._id, name },
      { upsert: true }
    );
    return Result.Success;
  } catch (error: any) {
    logger(error);
    return Result.Fail;
  }
};
