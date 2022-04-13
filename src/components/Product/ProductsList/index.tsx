import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { CardProducts } from "../CardProducts";
import { Container } from "./style";
import { Header } from "../../Header";

type Products = {
  id: number;
  name: string;
  image: string;
  price: string;
  descripition: string;
};

export function ProductsList() {
  const [productsItems, setProductsItems] = useState<Products[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setProductsItems(response.data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        {productsItems.map((product) => {
          return (
            <CardProducts
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.image}
              price={product.price}
              descripition={product.descripition}
            />
          );
        })}
      </Container>
    </>
  );
}
