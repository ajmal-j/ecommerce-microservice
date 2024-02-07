import { UserType } from "../database/model/user.model";

type LogUser = {
  input: {
    email: string;
    password: string;
  };
  userData: UserType;
};

type BuildLogUser = {
  passwordFunc: {
    comparePassword(password: string, inputPassword: string): Promise<boolean>;
  };
  token: {
    signToken(data: { _id: string }): string;
  };
};

export default function buildLogUser({ passwordFunc, token }: BuildLogUser) {
  return async function logUser({ input, userData }: LogUser) {
    if (!input.email) throw new Error("Not a valid email");
    if (!input.password) throw new Error("Not a valid password");

    const isPassCorrect = await passwordFunc.comparePassword(
      input.password,
      userData.password
    );

    if (!isPassCorrect) throw new Error("Password incorrect");

    const _id = userData._id.toString();
    const userToken = token.signToken({ _id });
    const data = {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
    };
    return Object.freeze({
      ...data,
      userToken,
    });
  };
}
