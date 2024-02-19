import { dbType } from "../index";
export default (db: dbType) => {
  return Object.freeze({
    async add(data: any) {
      const productInCart = await db.findOne({
        "product._id": data?.product?._id,
      });
      if (productInCart) return;
      return await db.create(data);
    },
    async getAll(id: string) {
      return db.find({ userId: id });
    },
    async delete({ userId, productId }: { userId: string; productId: string }) {
      return await db.findOneAndDelete(
        { userId },
        { "product._id": productId }
      );
    },
    async updateProduct({ product }: any) {
      return await db.updateMany(
        { "product._id": product._id },
        {
          $set: {
            product : product,
          },
        }
      );
    },
  });
};
