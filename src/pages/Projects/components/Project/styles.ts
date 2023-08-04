import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Text = styled(motion.div)`
  width: 90%;
  height: min-content;

  .index {
    font-size: 1.6rem;
  }

  h4, .buttons {
    margin: 2rem 0;
  }

  p + p {
    margin-top: 1.5rem;
  }

  .description {
    color: ${({ theme }) => theme.colors.secondary_text};
  }

  .buttons {
    margin-bottom: 0;
    display: flex;
    gap: 1.5rem;
  }

  @media(min-width: 870px) {
    .index, h4 {
      font-size: 1.7rem;
    }

    h4 {
      margin: 2.5rem 0;
    }

    p {
      width: 70%;
      font-size: 1.1rem;
    }

    p + p {
      margin-top: 2rem;
    }

    .buttons {
      margin-top: 2.5rem;
    }
  }

  @media(min-width: 1200px) {
    .index, h4 {
      font-size: 1.8rem;
    }

    p {
      width: 60%;
      font-size: 1.2rem;
    }
  }
`;

export const Image = styled(motion.div)`
  width: 100%;
  max-width: 27rem;
  height: 15rem;
  margin: 4rem auto;
  position: relative;

  span {
    position: absolute;
    right: 5px;
    top: -20px;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.2;
  }

  @media(min-width: 870px) {
    max-width: none;
    width: 40rem;
    height: 23rem;

    span {
      top: -22px;
      font-size: 0.9rem;
    }
  }

  @media(min-width: 1200px) {
    width: 48rem;
    height: 28rem;
  }
`;
