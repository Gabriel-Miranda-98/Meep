import { createContext, ReactNode, useState } from "react";
import { Cart } from "../Cart";
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
  openCartContext: () => void;
  closeCartContext: () => void;
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CardProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Products[]>([]);
  const [isOpenCart, setIsOpenCart] = useState(false);

  function AddNewProduct(product: Products) {
    const cartProductsClone = [...cartProducts];
    cartProductsClone.push(product);
    setCartProducts(cartProductsClone);
  }

  function openCartContext() {
    setIsOpenCart(true);
  }
  function closeCartContext() {
    setIsOpenCart(false);
  }

  /* function hendleIncrementProductCounter() {
    setProductCounter(productCounter + 1);
  }

  function hendleDecrementProductCounter() {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  }
*/
  return (
    <CartContext.Provider
      value={{ cartProducts, AddNewProduct, openCartContext, closeCartContext }}
    >
      {children}
      <Cart isCartOpen={isOpenCart} cartProductsItems={cartProducts} />;
    </CartContext.Provider>
  );
}
