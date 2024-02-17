import { editProduct } from "../useCase/index";

export default async (req: any) => {
  const { id, product } = req.body;
  return await editProduct({ id, product });
};
