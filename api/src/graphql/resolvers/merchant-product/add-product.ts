import { Product, Result, SubResolverArgs } from "../../../types";
import { logger } from "../../../utils/logger";

interface ProductArgs {
  product: Product;
}

export const addProduct = (merchantPtofile: SubResolverArgs) => {
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
