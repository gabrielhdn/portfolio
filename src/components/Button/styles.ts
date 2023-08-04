import styled, { css, CSSProp } from 'styled-components';

interface IButton {
  origin: string;
  selected?: boolean;
}

interface IOrigins {
  [key: string]: CSSProp;
}

const origins: IOrigins = {
  header: css`
    span {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.5rem;
      font-weight: 500;
      position: relative;
    }
  `,
  home: css`
    font-weight: 500;
    min-width: 5.6rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  `,
  projects: css`
    border: 1px solid ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.highlight};
    padding: .5rem;
    font-weight: 500;
    font-size: 1rem;
    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  `,
};

export const Button = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;

  ${({ origin, selected }) => origin === 'header' && css`
    span {
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        height: 1px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.highlight};
        transition: .3s;
        transform: ${selected ? 'scaleX(1)' : 'scaleX(0)'};
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }
  `}

  ${({ origin }) => origins[origin]};
`;
