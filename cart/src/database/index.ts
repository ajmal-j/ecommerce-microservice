import buildCartRepo from "./repository/cartRepo";
import { CartModel as db } from "./model/cart.model";

export const cartRepository = buildCartRepo(db);

export type dbType = typeof db;
