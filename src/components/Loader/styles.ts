import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 7rem;
    height: 7rem;
  }
`;
