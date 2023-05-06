import { StoreModel } from "../../../mongoDB/schema";
import { Product, Result, SubResolverArgs } from "../../../types";
import { logger } from "../../../utils/logger";

interface ProductArgs {
  product: Product;
}

export const addProduct = (merchantPtofile: SubResolverArgs) => {
  return async ({ product }: ProductArgs) => {
    const storeId = merchantPtofile.storesId.find(
      (item) => item === product.storeId
    );
    try {
      if (!storeId) throw new Error("store does not exist");
      return await StoreModel.create({ ...product.data, storeId });
    } catch (error: any) {
      logger(error);
    }
  };
};
