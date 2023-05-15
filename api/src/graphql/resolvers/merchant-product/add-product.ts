import { ProductModel, StoreModel } from "../../../mongoDB/schema";
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
       if (!storeId) throw new Error("merchant store does not exist");
      const result = await ProductModel.create({
        ...product.data,
        storeId: product.storeId,
      });
      const Product = await result.populate("storeId", "currency");
      return {
        currency: Product.storeId.currency,
        data: Product,
      };
    } catch (error: any) {
      logger(error);
    }
  };
};
