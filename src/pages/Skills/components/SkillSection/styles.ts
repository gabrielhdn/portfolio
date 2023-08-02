import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { MdTouchApp } from 'react-icons/md';

interface ICard {
  color: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  h4 {
    text-transform: uppercase;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 2.5rem;

    width: 90%;
    max-width: 36.5rem;
    background: ${({ theme }) => theme.colors.background};
  }

  @media(min-width: 420px) {
    .cards {
      gap: 3rem;
    }
  }

  @media(min-width: 550px) {
    .cards {
      width: 80%;
    }
  }

  @media(min-width: 1000px) {
    h4 {
      font-size: 1.8rem;
    }
  }
`;

export const Card = styled(Tilt)<ICard>`
  transform-style: preserve-3d;
  transition: border 0.3s ease;
  background: ${({ theme }) => theme.colors.card_background};

  width: 8rem;
  height: 11rem;
  border: 2px solid transparent;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid ${({ color }) => color};
    box-shadow: none;
  }

  &:hover > .icon {
    color: ${({ color }) => color};
    transform: translateZ(50px);
  }

  &:hover > span {
    opacity: 1;
    transform: translateZ(40px);
  }

  .icon {
    width: 3.5rem;
    height: 3.5rem;
  }

  span {
    position: absolute;
    bottom: 0.5rem;
    left: -10px;

    opacity: 0;
    font-weight: 500;
    transition: opacity 0.3s ease;
  }

  @media(min-width: 550px) {
    width: 10rem;
    height: 13rem;

    .icon {
    width: 4rem;
    height: 4rem;
  }
  }
`;

export const TouchIcon = styled(MdTouchApp)`
  opacity: 0.2;
  position: absolute;
  top: 5px;
  left: 5px;
`;
