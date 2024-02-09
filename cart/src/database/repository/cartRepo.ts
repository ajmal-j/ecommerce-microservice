import { dbType } from "../index";
export default (db: dbType) => {
  return Object.freeze({
    async add(data: any) {
      return await db.create(data);
    },
    async getAll(id: string) {
      return db.find({ userId: id });
    },
  });
};
