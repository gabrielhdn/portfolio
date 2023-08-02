import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  min-height: 62%;
  max-height: 30rem;
  width: 90%;
  max-width: 50rem;

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  .introduction {
    max-width: 100%;
    text-align: center;

    & > h4:first-child {
      margin-bottom: 2rem;
    }
  }

  @media(min-width: 390px) {
    h4 {
      font-size: 1.7rem;
    }
  }

  @media(min-width: 600px) {
    h4 {
      font-size: 2rem;
    }
  }

  @media(min-width: 1000px) {
    min-height: 59%;
    max-height: 27.5rem;
  }
`;
