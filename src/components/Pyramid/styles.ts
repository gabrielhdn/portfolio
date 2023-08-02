import styled from 'styled-components';

interface IPyramidSide {
  index: number;
}

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(30deg);

  .pyramid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  @media(min-width: 1000px) {
    width: 36px;
    height: 36px;
  }
`;

export const PyramidSide = styled.div<IPyramidSide>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.highlight};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform-origin: bottom;
  transform: rotateY(calc(90deg*${({ index }) => index})) translateZ(14.7px) rotateX(30deg);

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.highlight};
  }

  &:nth-child(odd) {
    background: #550a0f;
  }

  @media(min-width: 1000px) {
    transform: rotateY(calc(90deg*${({ index }) => index})) translateZ(17.7px) rotateX(30deg);
  }
`;
