import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
    transition: background .5s ease-in-out;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary_text};
  }

  a, button {
    color: ${({ theme }) => theme.colors.primary_text};
    text-decoration: none;
  }
`;
