import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 4.5rem;

  .portrait {
    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 13rem;
    }
  }

  @media(min-width: 720px) {
    padding-top: 5.7rem;
  }
`;

export const Content = styled.div`
  padding: 2.5rem 1.2rem;

  section {
    span {
      font-size: 1.5rem;
    }

    .content-text {
      margin: 2.5rem 0;

      p {
        color: ${({ theme }) => theme.colors.secondary_text}
      }

      strong {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }

    p + p {
      margin-top: 1.5rem;
    }
  }
`;
