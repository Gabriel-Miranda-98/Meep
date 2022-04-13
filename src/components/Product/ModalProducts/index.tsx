import { useState, useContext } from "react";
import Modal from "react-modal";
import {
  Container,
  ContetImage,
  ModalPriceAndDescription,
  ProductCounter,
  Title,
} from "./style";
import { CartContext } from "../../context";

import { IconClose } from "../../../styles/global";

type ModalProps = {
  product: string;
  price: string;
  image: string;
  descripition: string;
  isOpen: boolean;
  id: number;
  onCloseProductModal: () => void;
};

export function ModalProducts(props: ModalProps) {
  const { AddNewProduct } = useContext(CartContext);
  const [productCounter, setProductCounter] = useState(1);
  function hendleIncrementProductCounter() {
    setProductCounter(productCounter + 1);
  }
  function hendleDecrementProductCounter() {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  }
  function hendleOnclick() {
    AddNewProduct({
      id: props.id,
      name: props.product,
      price: parseFloat(props.price),
      images: props.image,
      productCounter: productCounter,
    });
    props.onCloseProductModal();
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseProductModal}
      overlayClassName="react-modal-overlay"
      className="modal-content"
    >
      <Container>
        <IconClose onClick={props.onCloseProductModal}></IconClose>
        <Title>{props.product}</Title>
        <ContetImage>
          <img src={props.image} alt="" />
        </ContetImage>
        <ModalPriceAndDescription>
          {props.descripition}
        </ModalPriceAndDescription>
        <ModalPriceAndDescription>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(parseFloat(props.price))}
        </ModalPriceAndDescription>
        <ProductCounter>
          <button onClick={hendleDecrementProductCounter}>-</button>
          <span>{productCounter}</span>
          <button onClick={hendleIncrementProductCounter}>+</button>
          <button onClick={hendleOnclick}>ADICIONAR</button>
        </ProductCounter>
      </Container>
    </Modal>
  );
}
