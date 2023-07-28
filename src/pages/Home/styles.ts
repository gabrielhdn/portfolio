import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;

  .switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
