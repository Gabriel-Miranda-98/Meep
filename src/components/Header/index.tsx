import { useHistory } from "react-router-dom";
import { Container, Contant } from "./styles";
import { Routes } from "../../constants/routes/public";
import { CartContext } from "../context";
import { useContext, useEffect } from "react";

export function Header() {
  const { cartProducts, openCartContext, closeCartContext } =
    useContext(CartContext);

  const History = useHistory();
  function hendleOnclick() {
    History.push(Routes.Home.cart);
    openCartContext();
  }
  /*
  useEffect(() => {
    closeCartContext();
  }, []);
*/
  return (
    <Container>
      <Contant>
        <img src="#"></img>
        <button onClick={hendleOnclick}> Carrinho {cartProducts.length}</button>
      </Contant>
    </Container>
  );
}
