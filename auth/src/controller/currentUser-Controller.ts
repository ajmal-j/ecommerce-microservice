import { currentUser } from "../useCase";

export async function currentUserController(req: any) {
  if (!req.headers?.authorization) throw new Error("Token missing");
  return await currentUser(req.headers.authorization);
}
