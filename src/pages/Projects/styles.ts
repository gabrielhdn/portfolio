import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 5rem;
  position: relative;

  .pyramid-container {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 5;
  }

  @media(min-width: 1000px) {
    .pyramid-container {
      right: 2rem;
      bottom: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;
  padding-top: 7rem;
  padding-bottom: 4rem;

  @media(min-width: 720px) {
    padding-top: 8.5rem;
  }
`;
