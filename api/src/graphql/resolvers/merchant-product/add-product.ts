import { IMerchantProfile } from "../../../mongoDB/types";
import { Product } from "../../../types";
import { logger } from "../../../utils/logger";

interface ProductArgs {
  product: Product;
}

export const addProduct = (
  merchantPtofile: Pick<IMerchantProfile, "_id" | "storesId">
) => {
  return async (args: ProductArgs) => {
    console.log('====================================');
    console.log();
    console.log('====================================');
    try {
    } catch (error: any) {
      logger(error);
    }
  };
};
