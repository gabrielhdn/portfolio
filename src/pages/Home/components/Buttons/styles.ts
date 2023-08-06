import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const flashAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-auto-flow: row;
  gap: 2rem;

  @media(min-width: 1000px) {
    grid-auto-flow: column;
    gap: 10rem;

    & > :last-child {
      grid-column-start: 2;
    }
  }

  span {
    position: relative;
    overflow: hidden;
    padding-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    width: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before, &::after {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.highlight};
      position: absolute;
      animation: ${flashAnimation} 2s ease infinite;
    }
  }

  .skills {
    &::before {
      content: '<';
      left: 4px;
    }
  }

  .about {
    &::after {
      content: '>';
      right: 0;
    }
  }

  .projects {
    &::before {
      content: '>';
      left: 50%;
      transform: translateX(-50%) rotate(90deg);
      top: 12px;
    }
  }
`;
