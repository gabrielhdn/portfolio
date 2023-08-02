import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 90%;
  margin: 0 auto;
  padding-top: 7rem;
  padding-bottom: 4rem;

  @media(min-width: 720px) {
    padding-top: 8.5rem;
  }
`;
