import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { CardProducts } from "../CardProducts";
import { Container } from "./style";

type Products = {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
};

export function Products() {
  const [productsItems, setProductsItems] = useState<Products[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setProductsItems(response.data));
  }, []);

  console.log(productsItems);

  return (
    <>
      <Container>
        {productsItems.map((product) => {
          return (
            <CardProducts
              id={product.id}
              name={product.name}
              images={product.image}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </Container>
    </>
  );
}
