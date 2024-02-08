import { ProductRepoType } from "../database";

export default ({
  productRepository,
  addToCartEvent,
}: {
  productRepository: ProductRepoType;
  addToCartEvent: any;
}) => {
  return async function addToCart({
    productId,
    userId,
  }: {
    productId: string;
    userId: string;
  }) {
    if (!productId) throw new Error("Product id is  missing");
    const product = await productRepository.getProduct(productId);
    if (!product) throw new Error("Product not found");

    addToCartEvent({ userId, product });
    return { userId, product }
  };
};
