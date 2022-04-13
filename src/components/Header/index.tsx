import { useHistory } from "react-router-dom";
import { Container, Contant } from "./styles";
import { Routes } from "../../constants/routes/public";

export function Header() {
  const History = useHistory();
  function hendleOnclick() {
    History.push(Routes.Home.cart);
  }

  return (
    <Container>
      <Contant>
        <img src="#"></img>
        <button onClick={hendleOnclick}> Carrinho</button>
      </Contant>
    </Container>
  );
}
