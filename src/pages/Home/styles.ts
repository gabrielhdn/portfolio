import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    position: fixed;
    top: 0;

    display: flex;
    padding: 1rem 1.2rem;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 1000px) {
      padding: 1rem 1.5rem;
    }
  }

  .logo {
    width: 8rem;

    @media(min-width: 1000px) {
      width: 10rem;
    }
  }
`;
