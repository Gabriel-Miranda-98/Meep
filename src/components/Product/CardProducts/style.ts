import styled from "styled-components";

export const Container = styled.a`
  background-color: #ebebeb;
  text-decoration: none;
  display: flex;
  width: 30%;
  height: 40%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.8s linear;
  cursor: pointer;
  &:link {
    color: #000000;
    text-decoration: none;
  }
  &:visited {
    color: #000000;
    text-decoration: none;
  }
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ContetImage = styled.div`
  display: flex;
  width: 50%;
  height: auto;
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
  color: #333333;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.div`
  text-transform: uppercase;
  text-justify: auto;
  font-weight: bold;
  font-size: 100%;
  color: #333333;
  margin-top: 1rem;
`;
