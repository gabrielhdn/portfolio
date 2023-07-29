import {
  SiGithub, SiLinkedin, SiInstagram, SiGmail,
} from 'react-icons/si';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }

  @media(max-width: 720px) {
    gap: 1.2rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
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
