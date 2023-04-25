import { ProductModel } from "../../../mongoDB/schema";
import { ObjectId } from "../../../mongoDB/types";
import { Result } from "../../../types";
import { logger } from "../../../utils/logger";
export const deleteOneProduct = () => {
  return async ({ _id }: { _id: ObjectId }) => {
    try {
      const result = await ProductModel.findByIdAndDelete({ _id });
      if (!result) throw new Error("product doesn't exist");
      return Result.Success;
    } catch (error: any) {
      logger(error);
    }
  };
};
