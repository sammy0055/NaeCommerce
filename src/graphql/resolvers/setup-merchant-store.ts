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
    await StoreModel.create({ MerchantProfileId: merchantProfile._id, name });
    return Result.Success;
  } catch (error: any) {
      logger(error);  
    return Result.Fail;
  }
};
