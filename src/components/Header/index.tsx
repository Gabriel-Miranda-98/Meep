import { useHistory } from "react-router-dom";
import { Container, Contant } from "./styles";
import { Routes } from "../../constants/routes/public";
import { CartContext } from "../context";
import { useContext } from "react";

export function Header() {
  const { cartProducts } = useContext(CartContext);

  console.log(cartProducts);

  const History = useHistory();
  function hendleOnclick() {
    History.push(Routes.Home.cart);
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
