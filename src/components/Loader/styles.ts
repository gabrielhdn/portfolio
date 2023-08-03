import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => `${theme.colors.background}70`};
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;
`;
