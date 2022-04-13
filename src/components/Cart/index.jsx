import { Header } from "../../components/Header/index";
import { useState } from "react";
import {
  Container,
  ContainerProduct,
  ContetImage,
  ContetInformations,
  ProductPrice,
  ProductTitle,
  ProductCounter,
} from "./style";

export function Cart() {
  const [productCounter, setProductCounter] = useState(0);

  function hendleIncrementProductCounter() {
    setProductCounter(productCounter + 1);
  }

  function hendleDecrementProductCounter() {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  }
  return (
  <>
    <Header />
   
     
      <Container>
      <h1>Carrinho</h1>
            <ContainerProduct>
            <ContetImage>
                <img src=""></img>
              </ContetImage>
              <ContetInformations>
                <ProductTitle>"Default"</ProductTitle>
                <ProductPrice>
                  RS1588,00
                </ProductPrice>
                <ProductCounter>
                <button onClick={hendleDecrementProductCounter}>-</button>
                <span>{productCounter}</span>
                <button onClick={hendleIncrementProductCounter}>+</button>
              </ProductCounter>
              </ContetInformations>
          </ContainerProduct>

          <ContainerProduct>
            <ContetImage>
                <img src=""></img>
              </ContetImage>
              <ContetInformations>
                <ProductTitle>"Default"</ProductTitle>
                <ProductPrice>
                  RS1588,00
                </ProductPrice>
                
                <ProductCounter>
                <button onClick={hendleDecrementProductCounter}>-</button>
                <span>{productCounter}</span>
                <button onClick={hendleIncrementProductCounter}>+</button>
                
              </ProductCounter>

              </ContetInformations>
          </ContainerProduct>

      </Container>
      
  </>
    );
}
