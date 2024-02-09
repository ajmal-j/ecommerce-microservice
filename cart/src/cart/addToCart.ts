export default () => {
  return (userId, product) => {
    if (!userId) throw new Error("UserId is missing");
    if (!product) throw new Error("Product is missing.");

    return Object.freeze({
      userId,
      product,
    });
  };
};
