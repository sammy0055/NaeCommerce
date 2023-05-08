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
    const merchantProfile = await MarchantProfileModel.findOne(
      {
        sub: token.sub,
      },
      { _id: 1 }
    ).lean();
    if (!merchantProfile) return Result.Fail;
    const storeId = await StoreModel.findOneAndUpdate(
      { name },
      { MerchantProfileId: merchantProfile._id, name },
      { upsert: true, setDefaultsOnInsert: true, new: true }
    )
      .select("_id")
      .lean();
    await MarchantProfileModel.updateOne(
      { sub: token.sub },
      { $addToSet: { storesId: storeId._id } }
    );

    return Result.Success;
  } catch (error: any) {
    logger(error);
    return Result.Fail;
  }
};
