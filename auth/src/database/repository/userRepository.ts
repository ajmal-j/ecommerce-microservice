import { UserObjectType } from "../model/user.model";

export function buildUserRepo({ db }: any) {
  return Object.freeze({
    async add(userData: UserObjectType) {
      return await db.create(userData);
    },
    async findByEmail(email: string) {
      return await db.findOne({ email });
    },
    async findById(id: string) {
      return await db.findById(id).select("-password");
    },
    async users() {
      return await db.find().select("-password");
    },
  });
}
