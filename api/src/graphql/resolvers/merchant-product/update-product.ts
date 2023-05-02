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
      const result = await ProductModel.findOneAndUpdate(
        { _id },
        {
            $set: data,
          returnDocument: "after",
        }
      ).populate("storeId", "currency");
      console.log("====================================");
      console.log(result);
        console.log("====================================");
        if(!result) throw new Error("product doesn't exist");
      return result;
    } catch (error: any) {
      logger(error);
    }
  };
};
