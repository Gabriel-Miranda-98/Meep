import { useHistory } from "react-router-dom";
import { Container, Contant } from "./styles";
import { Routes } from "../../constants/routes/public";
import { CartContext } from "../context";
import { useContext } from "react";

export function Header() {
  const { cartProducts, openCartContext } = useContext(CartContext);

  const History = useHistory();
  function hendleOnclick() {
    History.push(Routes.cart);
    openCartContext();
  }

  return (
    <Container>
      <Contant>
        <img src="#"></img>
        <button onClick={hendleOnclick}> Carrinho {cartProducts.length}</button>
      </Contant>
    </Container>
  );
}
