import { IMerchantProfile } from "../../../mongoDB/types";
import { Product, Result } from "../../../types";
import { logger } from "../../../utils/logger";

interface ProductArgs {
  product: Product;
}

export const addProduct = (
  merchantPtofile: Pick<IMerchantProfile, "_id" | "storesId">
) => {
  return async (args: ProductArgs) => {
    try {
      console.log("====================================");
      console.log(merchantPtofile, args.product);
      console.log("====================================");
      return Result.Success;
    } catch (error: any) {
      logger(error);
    }
  };
};
