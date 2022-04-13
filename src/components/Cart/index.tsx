import { Header } from "../Header/index";
import { useState } from "react";
import {
  Container,
  ContainerProduct,
  ContetImage,
  ContetInformations,
  ProductPrice,
  ProductTitle,
  ProductCounter,
} from "./style";

type CartProps = {
  isCartOpen: boolean;
  cartProductsItems: {
    id: number;
    name: string;
    price: number;
    images: string;
    productCounter: number;
  }[];
};

export function Cart(props: CartProps) {
  console.log(props.cartProductsItems);

  return (
    <>
      {props.isCartOpen && (
        <Container>
          <h1>Carrinho</h1>
          {props.cartProductsItems.map((items) => {
            return (
              <ContainerProduct>
                <ContetImage>
                  <img src={items.images}></img>
                </ContetImage>
                <ContetInformations>
                  <ProductTitle>{items.name}</ProductTitle>
                  <ProductPrice>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(items.price)}
                  </ProductPrice>
                  <ProductCounter>
                    <button>-</button>
                    <span>{items.productCounter}</span>
                    <button>+</button>
                  </ProductCounter>
                </ContetInformations>
              </ContainerProduct>
            );
          })}
        </Container>
      )}
    </>
  );
}
