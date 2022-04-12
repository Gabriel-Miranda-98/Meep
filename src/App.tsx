import { Header } from "./components/Header";
import { Products } from "./components/Product/ProductsList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Products />
      <GlobalStyle />
    </>
  );
}
