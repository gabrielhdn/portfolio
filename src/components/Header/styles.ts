import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface INavigation {
  open: boolean;
}

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 2rem 4rem;
  background: ${({ theme }) => `${theme.colors.background}90`};

  .menu-icon {
    display: none;
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }

  @media(max-width: 1150px) {
    padding: 2rem 2rem;
  }

  @media(max-width: 870px) {
    padding: 1.5rem 1.5rem;

    .menu-icon {
      display: block;
      z-index: 15;
    }
  }
`;

export const Navigation = styled.nav<INavigation>`
  display: flex;
  align-items: center;
  gap: 6rem;

  .link-container {
    display: flex;
    gap: 2rem;

    span {
      font-size: 1rem;
    }
  }

  @media(max-width: 1150px) {
    gap: 3rem;

    .link-container {
      gap: 1.5rem;
    }
  }


  @media(max-width: 870px) {
    position: fixed;
    inset: 0 0 0 25%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;

    background: ${({ theme }) => theme.colors.nav_background};
    backdrop-filter: blur(4px);
    transform: translateX(100%);
    transition: transform .4s ease-out;

    ${({ open }) => open && css`
      transform: translateX(0%);
    `}

    .link-container {
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
    }
  }
`;
