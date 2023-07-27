import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background: #1A1A1A;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 7rem;
  }
`;
