import { Header } from "./components/Header";
import { ProductsList } from "./components/Product/ProductsList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyle />
    </>
  );
}
