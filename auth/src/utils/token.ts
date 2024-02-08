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

  return new Promise<string | null>((resolve) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) resolve(null);
      resolve(user as string);
    });
  });
}
export function validateToken(auth: string) {
  const token = auth.split(" ")[1];
  if (!token) throw new Error("Invalid token");

  return token;
}
export type TokenType = {
  signToken: typeof signToken;
  decodeToken: typeof decodeToken;
  validateToken: typeof validateToken;
};
