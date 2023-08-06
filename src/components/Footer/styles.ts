import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 2rem 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary_text};
  background: ${({ theme }) => theme.colors.background};

  position: absolute;
  bottom: 0;
  z-index: 8;

  .content {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.secondary_text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  span {
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.highlight};
  }

  @media(max-width: 545px) {
    span {
      font-size: 0.9rem;
    }
  }

  @media(max-width: 370px) {
    padding: 1.5rem 1.5rem;

    span {
      font-size: 0.9rem;
    }
  }
`;
