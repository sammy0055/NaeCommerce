import { storeIdPopulate } from "../../../data/populate-data";
import { ProductModel } from "../../../mongoDB/schema";
import { ObjectId } from "../../../mongoDB/types";
import { Product } from "../../../types";
import { logger } from "../../../utils/logger";

type ProductData = {
  _id: ObjectId;
  data: Product;
};
export const updateOneProduct = () => {
  return async ({ _id, data }: ProductData) => {
    try {
      const Product = await ProductModel.findOneAndUpdate(
        { _id },
        {
          $set: data,
        },
        { new: true }
      ).populate(storeIdPopulate.path, storeIdPopulate.currency);
      if (!Product) throw new Error("product doesn't exist");
      return {
        currency: Product.storeId.currency,
        data: Product,
      };
    } catch (error: any) {
      logger(error);
    }
  };
};
