import { ProductModel } from "../../mongoDB/schema";
import { Result } from "../../types";
import { logger } from "../../utils/logger";

export const add_product = async (_: any, args: any, contextValue: any) => {
  try {
    const token = await contextValue.token();
    if (!token) throw new Error("access denied, please logIn");
    // const product = await ProductModel.create({ ...args });
    console.log("args", args);
    return args.product;
  } catch (error: any) {
    logger(error);
  }
};
