import { createContext, ReactNode, useState } from "react";

type Products = {
  id: number;
  name: string;
  price: number;
  images: string;
  productCounter: number;
};
type CartProviderProps = {
  children: ReactNode;
};

type CartContextData = {
  cartProducts: Products[];
  AddNewProduct: (product: Products) => void;
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CardProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Products[]>([]);

  function AddNewProduct(product: Products) {
    const cartProductsClone = [...cartProducts];
    cartProductsClone.push(product);
    setCartProducts(cartProductsClone);
  }

  return (
    <CartContext.Provider value={{ cartProducts, AddNewProduct }}>
      {children}
    </CartContext.Provider>
  );
}
