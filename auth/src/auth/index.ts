import * as passwordFunc from "../utils/passWordHash";
import * as token from "../utils/token";
import buildLogUser from "./logUser";
import buildMakeUser from "./makeUser";

export const makeUser = buildMakeUser({ passwordFunc });
export const logInUser = buildLogUser({ passwordFunc, token });
