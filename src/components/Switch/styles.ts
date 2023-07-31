import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => (theme.title === 'dark' ? 'flex-end' : 'flex-start')};

  height: 1.7rem;
  width: 4.2rem;
  background-image: radial-gradient(circle farthest-corner at 10% 20%,
                    rgba(253,203,50,0.4) 0%,
                    rgba(244,56,98,0.4) 100.2%);

  border-radius: 25px;
  padding: 0 3px;
  transition: all .3s;
  cursor: pointer;

  .handle {
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.9);
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 1.1rem;
    height: 1.1rem;
  }

  ${({ theme }) => theme.title === 'dark' && css`
  background-image: linear-gradient(109.8deg,
                      rgba(62,5,116,0.4) -5.2%,
                      rgba(41,14,151,0.4) -5.2%,
                      rgba(216,68,148,0.4) 103.3%);
  `}

  @media(min-width: 1200px) {
    width: 4.7rem;
  }
`;
