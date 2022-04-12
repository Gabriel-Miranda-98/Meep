import { useState } from "react";
import Modal from "react-modal";
import {
  Container,
  ContetImage,
  ModalPriceAndDescription,
  ProductCounter,
  Title,
} from "./style";

type ModalProps = {
  product: string;
  price: string;
  image: string;
  descripition: string;
  isOpen: boolean;
  onCloseProductModal: () => void;
};

export function ModalProducts(props: ModalProps) {
  const [productCounter, setProductCounter] = useState(0);

  function hendleIncrementProductCounter() {
    setProductCounter(productCounter + 1);
  }

  function hendleDecrementProductCounter() {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseProductModal}
      overlayClassName="react-modal-overlay"
      className="modal-content"
    >
      <Container>
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
          <button>ADICIONAR</button>
        </ProductCounter>
      </Container>
    </Modal>
  );
}
