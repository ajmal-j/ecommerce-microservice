import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

export function signToken({ _id }: { _id: string }) {
  if (!ACCESS_TOKEN_SECRET) throw new Error("No salt for jwt");
  return jwt.sign(_id, ACCESS_TOKEN_SECRET);
}

export async function decodeToken(token: string) {
  if (!ACCESS_TOKEN_SECRET) return null;
  try {
    const payload: any = jwt.verify(token, ACCESS_TOKEN_SECRET);
    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export type TokenType = {
  signToken: typeof signToken;
  decodeToken: typeof decodeToken;
};
