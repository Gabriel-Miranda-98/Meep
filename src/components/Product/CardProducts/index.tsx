import { useState } from "react";
import { ModalProducts } from "../ModalProducts";
import {
  Container,
  ContetImage,
  ContetInformations,
  ProductPrice,
  ProductTitle,
} from "./style";

type productsItemsProps = {
  id: number;
  name: string;
  images: string;
  price: string;
  description: string;
};

export function CardProducts(props: productsItemsProps) {
  const [isModalProduct, setIsModalProduct] = useState(false);

  function handleOpenProductModal() {
    setIsModalProduct(true);
  }

  function handleCloseProductModal() {
    setIsModalProduct(false);
  }

  return (
    <>
      <Container onClick={handleOpenProductModal}>
        <ContetImage>
          <img src={props.images ?? "none"}></img>
        </ContetImage>
        <ContetInformations>
          <ProductTitle>{props.name ?? "Default"}</ProductTitle>
          <ProductPrice>{props.price ?? "R$00,0"}</ProductPrice>
        </ContetInformations>
      </Container>
      <ModalProducts
        isOpen={isModalProduct}
        onCloseProductModal={handleCloseProductModal}
        product={props.name ?? "Default"}
        price={props.price ?? "R$00,0"}
        description={props.description}
        image={props.images ?? "none"}
      />
    </>
  );
}
