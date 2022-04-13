import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants/routes/public";
import { CartContext } from "../context";
import { useContext, useEffect } from "react";

import "react-toastify/dist/ReactToastify.min.css";

import {
  Container,
  ContainerProduct,
  ContetImage,
  ContetInformations,
  ProductPrice,
  ProductTitle,
  ProductCounter,
  ContentCart,
  ContetTotalCart,
} from "./style";
import { setTimeout } from "timers/promises";

type CartProps = {
  isCartOpen: boolean;
  cartProductsItems: {
    id: number;
    name: string;
    price: number;
    images: string;
    productCounter: number;
  }[];
  hendleIncrementProductCounter: (id: number) => void;
  hendleDecrementProductCounter: (id: number) => void;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  images: string;
  productCounter: number;
}[];

export function Cart(props: CartProps) {
  const { closeCartContext } = useContext(CartContext);

  function TotalValueCart(ProductsItems: CartItem) {
    let TotalPrice = 0;
    ProductsItems.map((total) => {
      TotalPrice += total.productCounter * total.price;
    });

    return TotalPrice;
  }
  function Hedirection() {}

  function handleSuccess() {
    toast.success(
      "Pedido Enviado Com Sucesso!! Estamos Redirencionando Você para pagina Inicial"
    );
    setInterval(function () {
      window.location.href = "http://localhost:3000";
      closeCartContext();
    }, 2000);
  }

  return (
    <>
      {props.isCartOpen && (
        <Container>
          <h1>Carrinho</h1>
          <ContentCart>
            {props.cartProductsItems.map((items) => {
              return (
                <ContainerProduct key={items.id}>
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
                      <button
                        onClick={(e) =>
                          props.hendleDecrementProductCounter(items.id)
                        }
                      >
                        -
                      </button>
                      <span>{items.productCounter}</span>
                      <button
                        onClick={(e) =>
                          props.hendleIncrementProductCounter(items.id)
                        }
                      >
                        +
                      </button>
                    </ProductCounter>
                  </ContetInformations>
                </ContainerProduct>
              );
            })}
            <ContetTotalCart>
              <strong>TOTAL:</strong>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(TotalValueCart(props.cartProductsItems))}
              </p>
            </ContetTotalCart>
            <ToastContainer />
            <button type="button" onClick={handleSuccess}>
              Enviar Pedido
            </button>
          </ContentCart>
        </Container>
      )}
    </>
  );
}
