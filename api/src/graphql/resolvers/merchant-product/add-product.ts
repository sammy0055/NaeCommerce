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
      // if (!storeId) throw new Error("store does not exist");
      const result = await ProductModel.create({
        ...product.data,
        storeId: product.storeId,
      });
      const { storeId, ...rest } = await result.populate("storeId", "name");
      const data = {
        currency: storeId.name,
        data: { ...rest._doc },
      };
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      return data;
    } catch (error: any) {
      logger(error);
    }
  };
};
