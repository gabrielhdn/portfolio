import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: relative;

  .pyramid-container {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 5;
  }

  @media(min-width: 1000px) {
    .pyramid-container {
      position: fixed;
      right: 2rem;
      bottom: 2rem;
      z-index: 5;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 90%;
  margin: 0 auto;
  padding-top: 7rem;
  padding-bottom: 4rem;

  @media(min-width: 720px) {
    padding-top: 8.5rem;
  }
`;
