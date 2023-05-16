import { MarchantProfileModel } from "../../../mongoDB/schema";
import { IMerchantProfile } from "../../../mongoDB/types";
import { SubResolverArgs, contextDetails } from "../../../types";
import { logger } from "../../../utils/logger";
import { addProduct } from "../merchant-product/add-product";
import { updateOneProduct } from "../merchant-product/update-product";

const validateMerchant = (
  resolver: (merchantProfile: SubResolverArgs) => unknown
) => {
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
      addProduct: addProduct(merchantProfile),
      updateOneProduct: updateOneProduct(),
    };
  }
);
