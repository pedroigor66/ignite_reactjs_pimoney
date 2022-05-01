import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  // to keep it centered in the page
  margin: 0 auto;

  // 0 16px (so the icon does not stick to the edge when screen size shrinks) and 160px
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--button-background);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    // transition and hover are for cool effects when hovering the button
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
