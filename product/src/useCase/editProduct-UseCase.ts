import updateProductInCartEvent from "../event/producer/editProductInCart";

export default (productRepository: any) => {
  return async ({ id, product }: { id: string; product: {} }) => {
    const updatedProduct = await productRepository.updateProduct({
      id,
      product,
    });
    updateProductInCartEvent(updatedProduct);
    return;
  };
};
