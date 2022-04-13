import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { CardProvider } from "./components/context";

export function App() {
  return (
    <CardProvider>
      <GlobalStyle />
      <AppRoutes />
    </CardProvider>
  );
}
