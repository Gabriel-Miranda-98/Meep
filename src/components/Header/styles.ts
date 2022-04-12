import styled from "styled-components";

export const Container = styled.header`
  background: var(--header);
`;

export const Contant = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--button);
    border: 0;
    padding: 0 4rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
