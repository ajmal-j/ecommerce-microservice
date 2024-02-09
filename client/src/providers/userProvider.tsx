import { ReactNode, createContext, useContext, useState } from "react";

export type UseContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export type UserType = {
  name: string;
  email: string;
  _id?: string;
};
const UserContext = createContext<UseContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function UserAuth() {
  const context = useContext(UserContext);
  if (!context) throw new Error("userContext is missing.");
  return context;
}
