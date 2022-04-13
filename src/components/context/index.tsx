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
    setCartProducts([]);
  }

  function hendleIncrementProductCounter(id: number) {
    const produt = cartProducts.filter((x) => x.id === id);
    const cartProductsClone = cartProducts.filter((x) => x.id !== id);
    produt.forEach((element) => {
      element.productCounter++;
    });
    cartProductsClone.push(...produt);
    setCartProducts(cartProductsClone);
  }

  function hendleDecrementProductCounter(id: number) {
    const produt = cartProducts.filter((x) => x.id === id);
    if (produt[0].productCounter > 1) {
      const cartProductsClone = cartProducts.filter((x) => x.id !== id);
      produt.forEach((element) => {
        element.productCounter--;
      });
      cartProductsClone.push(...produt);
      setCartProducts(cartProductsClone);
    }
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, AddNewProduct, openCartContext, closeCartContext }}
    >
      {children}
      <Cart
        isCartOpen={isOpenCart}
        cartProductsItems={cartProducts}
        hendleIncrementProductCounter={hendleIncrementProductCounter}
        hendleDecrementProductCounter={hendleDecrementProductCounter}
      />
    </CartContext.Provider>
  );
}
