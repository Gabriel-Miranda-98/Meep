import Modal from "react-modal";

type ModalProps = {
  product: string;
  price: string;
  image: string;
  description: string;
  isOpen: boolean;
  onCloseProductModal: () => void;
};

export function ModalProducts(props: ModalProps) {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onCloseProductModal}>
      <h1>{props.product}</h1>
      <img src={props.image} alt="" />
      <h2>{props.description}</h2>
      <h3>{props.price}</h3>
    </Modal>
  );
}
