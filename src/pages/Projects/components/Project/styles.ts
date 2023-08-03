import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Text = styled(motion.div)`
  width: 100%;
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
    display: flex;
    gap: 1.5rem;
  }
`;

export const Image = styled(motion.div)`
  width: 100%;
  height: 11rem;
`;
