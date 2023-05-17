import { ProductModel } from "../../../mongoDB/schema";
import { Product, SubResolverArgs } from "../../../types";
import { logger } from "../../../utils/logger";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import { storeIdPopulate } from "../../../data/populate-data";

interface ProductArgs {
  product: Product;
}

export const addProduct = (merchantProfile: SubResolverArgs) => {
  return async ({ product }: ProductArgs) => {
    const storeId = merchantProfile.storesId.find(
      (item) => item.toString() === product.storeId.toString()
    );
    try {
      if (!storeId) throw new Error("merchant store doesn't exist");
      const productHash = Base64.stringify(sha256(JSON.stringify(product)));
      const isEmpty = await ProductModel.findOne({ productHash });
      if (isEmpty) throw new Error("product already exist");

      const result = await ProductModel.create({
        ...product.data,
        storeId: product.storeId,
        productHash,
      });
      const Product = await result.populate(
        storeIdPopulate.path,
        storeIdPopulate.currency
      );
      return {
        currency: Product.storeId.currency,
        data: Product,
      };
    } catch (error: any) {
      logger(error);
    }
  };
};
