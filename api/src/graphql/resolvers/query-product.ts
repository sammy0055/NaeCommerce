import { storeIdPopulate } from "../../data/populate-data";
import { ProductModel } from "../../mongoDB/schema";
import { ObjectId } from "../../mongoDB/types";
import { logger } from "../../utils/logger";

export const product = async (_: unknown, { _id }: { _id: ObjectId }) => {
  try {
    const Product = await ProductModel.findById({ _id }).populate(
      storeIdPopulate.path,
      storeIdPopulate.currency
      );
    if (!Product) throw new Error("product doesn't exist");
    return {
      currency: Product.storeId.currency,
      data: Product,
    };
  } catch (error: any) {
    logger(error);
  }
};
