import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 10;

  .icons {
    display: flex;
    flex-direction: column;
    gap: 15px;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  .base {
    width: 2px;
    height: 5rem;
    background: ${({ theme }) => theme.colors.primary_text};
  }

  @media(min-width: 1100px) {
    left: 5rem;

    .icons {
      svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }

    .base {
      height: 8rem;
    }
  }
`;
