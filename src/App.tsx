import { Header } from "./components/Header";
import { ProductsList } from "./components/Product/ProductsList";
import { GlobalStyle } from "./styles/global";
import { Cart } from "./components/Cart";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}
