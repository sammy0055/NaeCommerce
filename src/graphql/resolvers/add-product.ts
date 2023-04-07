import { ProductModel } from "../../mongoDB/schema";

export const add_product = async (_: any, args: any) => {
  try {
    const product = await ProductModel.create({...args})
    console.log(product);
    
  } catch (error: any) {}
};
