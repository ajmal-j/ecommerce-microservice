import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

type TokenType = { _id: string };

export function signToken({ _id }: TokenType) {
  if (!ACCESS_TOKEN_SECRET) throw new Error("No salt for jwt");
  return jwt.sign(_id, ACCESS_TOKEN_SECRET);
}

export async function decodeToken(token: string) {
  if (!ACCESS_TOKEN_SECRET) return null;

  return new Promise<TokenType | null>((resolve) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) resolve(null);
      resolve(user as TokenType);
    });
  });
}
