import styled, { css, CSSProp } from 'styled-components';

interface IButton {
  origin: string;
  selected: boolean;
}

interface IOrigins {
  [key: string]: CSSProp;
}

const origins: IOrigins = {
  header: css`
    /* padding: .5rem; */
  `,
  home: css``,
  projects: css``,
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

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  ${({ origin, selected }) => origin === 'header' && css`
    span {
      position: relative;
      height: 1.5rem;
      font-size: 1rem;

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
