import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`;

export const ContainerProduct = styled.div`
  background-color: #ebebeb;
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 40%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.8s linear;
  &:link {
    color: #000000;
    text-decoration: none;
  }
  &:visited {
    color: #000000;
    text-decoration: none;
  }
`;

export const ContetImage = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  background-color: gray;
  img {
    width: 100%;
    height: auto;
    border-radius: 8%;
  }
`;

export const ContetInformations = styled.div`
  align-items: flex-start;
  padding: 5%;
`;

export const ProductTitle = styled.div`
  text-transform: uppercase;
  text-justify: auto;
  font-weight: bold;
  font-size: 100%;
  display: inline;
  color: var(--text);
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.div`
  text-transform: uppercase;
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

export const ContentCart = styled.div`
  background: #ebebeb;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 0.5rem;
  & > button {
    width: 100%;
    margin: 0.5rem 2%;
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
`;

export const ContetTotalCart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
