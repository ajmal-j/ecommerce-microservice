import { ReactNode, createContext, useContext, useState } from "react";

export type UseContextType = {
  cart: [];
  setCart: React.Dispatch<React.SetStateAction<[]>>;
};

const CartContext = createContext<UseContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function UserCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext is missing.");
  return context;
}
