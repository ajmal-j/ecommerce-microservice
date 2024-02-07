type BuildMakeUser = {
  passwordFunc: { hashPassword(password: string): Promise<string> };
};

type MakeUser = {
  email: string;
  name: string;
  password: string;
};

export default function buildMakeUser({ passwordFunc }: BuildMakeUser) {
  return async function makeUser({ email, name, password }: MakeUser) {
    if (password.length < 6) throw new Error("Invalid password");
    if (!name) throw new Error("No username");
    if (!email) throw new Error("No email");

    const encryptedPass = await passwordFunc.hashPassword(password);
    return Object.freeze({
      name,
      password: encryptedPass,
      email,
    });
  };
}
