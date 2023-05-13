import { MarchantProfileModel } from "../../../mongoDB/schema";
import { Result, contextDetails } from "../../../types";
import { logger } from "../../../utils/logger";

const validateMerchant = (resolver: (merchantProfile: string) => unknown) => {
  try {
    return async (_: unknown, __: unknown, contextValue: contextDetails) => {
        const token = await contextValue.token();
      const merchantProfile = await MarchantProfileModel.findOne(
        {
          sub: token.sub,
        },
        { _id: 1, storesId: 1 }
      );
      if (!merchantProfile)
        throw new Error("forbidden. user is not a merchant");

      return resolver(merchantProfile);
    };
  } catch (error: any) {
    logger(error);
  }
};

export const merchant_mode_parent_resolver = validateMerchant(
  async (merchantProfile) => {
    return {
      addProduct: async (_: unknown, contextValue: contextDetails) => {
        try {
          //const token = await contextValue.token();
          console.log("====================================");
          console.log(_, merchantProfile);
          console.log("====================================");
          return Result.Success;
        } catch (error: any) {
          console.log("error", error.code);
          return Result.Fail;
        }
      },
    };
  }
);
