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
`;

export const Image = styled(motion.div)`
  width: 100%;
  /* max-width: 24.2rem; */
  max-width: 27rem;
  /* height: 14rem; */
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
`;
