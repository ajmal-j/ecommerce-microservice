export default (productRepository:any) => {
  return async ({ id, product }: { id: string; product: {} }) => {
    return await productRepository.updateProduct({ id, product });
  };
};
