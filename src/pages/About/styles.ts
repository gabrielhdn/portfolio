import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 4.5rem;
  padding-bottom: 2rem;

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
  padding: 2.5rem 1rem;

  section {
    span {
      font-size: 1.5rem;
    }

    .content-text {
      margin: 2.5rem 0;
    }

    p + p {
      margin-top: 1.5rem;
    }
  }
`;
