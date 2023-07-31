import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }

  @media(max-width: 720px) {
    gap: 1.2rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
