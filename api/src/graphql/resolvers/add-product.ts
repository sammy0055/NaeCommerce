import { contextDetails } from "../../types";
import { logger } from "../../utils/logger";

export const add_product = async (_: unknown, args: unknown, contextValue: contextDetails) => {
  try {
    const token = await contextValue.token();
    if (!token) throw new Error("access denied, please logIn");
    // const product = await ProductModel.create({ ...args });
    console.log("args", args);
    return "args.product";
  } catch (error: any) {
    logger(error);
  }
};
