import { motion } from 'framer-motion';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface INavigation {
  open: boolean;
}

interface INavIcon extends LinkProps {
  selected?: boolean;
}

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 2rem 4rem;

  .menu-icon {
    display: none;
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }

  @media(max-width: 1000px) {
    padding: 2rem 2rem;
  }

  @media(max-width: 720px) {
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
    font-weight: 500;
    font-size: .9rem;
  }

  @media(max-width: 1000px) {
    gap: 4rem;

    .link-container {
      gap: 1.5rem;
    }
  }


  @media(max-width: 720px) {
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
      font-size: 1.1rem;
    }
  }
`;

export const NavIcon = styled(Link)<INavIcon>`
  padding: .5rem;
  cursor: auto;

  span {
    position: relative;
    text-transform: uppercase;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;

      height: 1px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.highlight};
      transition: .3s;
      transform: ${({ selected }) => (selected ? 'scaleX(1)' : 'scaleX(0)')};
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;
