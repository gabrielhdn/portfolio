import styled, { createGlobalStyle } from 'styled-components';
import {
  SiGithub, SiLinkedin, SiInstagram, SiGmail,
} from 'react-icons/si';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: background 0.5s ease-in-out;
  }

  svg, ::before, ::after {
    transition: color 0.3s ease;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary_text};
    scrollbar-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.scroll};
    }
  }

  a, button {
    color: ${({ theme }) => theme.colors.primary_text};
    text-decoration: none;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 400;
  }


`;

export const Github = styled(SiGithub)`
  &:hover {
    color: ${({ $color }) => $color};
  }
`;

export const Linkedin = styled(SiLinkedin)`
  &:hover {
    color: ${({ $color }) => $color};
  }
`;

export const Instagram = styled(SiInstagram)`
  &:hover {
    color: ${({ $color }) => $color};
  }
`;

export const Gmail = styled(SiGmail)`
  &:hover {
    color: ${({ $color }) => $color};
  }
`;
