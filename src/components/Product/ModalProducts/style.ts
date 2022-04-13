import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-justify: auto;
  font-weight: bold;
  font-size: 100%;
  display: inline;
  color: var(--text);
  margin-bottom: 1rem;
`;

export const ContetImage = styled.div`
  display: flex;
  margin 0 auto;
  width: 100%;
  height: auto;
  img {
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

export const ModalPriceAndDescription = styled.h2`
  text-transform: uppercase;
  text-align: left;
  text-justify: auto;
  font-weight: bold;
  font-size: 100%;
  color: var(--text);
  margin-top: 1rem;
`;

export const ProductCounter = styled.div`
  margin 1rem auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  button {
    margin:0 2%;
    font-size: 1rem;
    color: #fff;
    background: var(--button);
    border: 0;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    height: 2rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
    text-align: center;
    height: 2rem;
    border: 1px solid  var(--text);
    padding: 0.2rem 0.5rem;

  }
`;
