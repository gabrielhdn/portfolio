import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 4.5rem;

  .portrait {
    width: 100%;

    img {
      object-fit: cover;
      object-position: 50% 42%;
      width: 100%;
      height: 13rem;
    }
  }

  .pyramid-container {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 5;
  }

  @media(min-width: 490px) and (max-width: 1000px) {
    padding-top: 7rem;

    .portrait {
      width: min-content;
      margin: 0 auto;
      padding: 2rem 0;
      padding-bottom: 1rem;

      img {
        width: 12rem;
        height: 17rem;
      }
    }
  }

  @media(min-width: 1000px) {
    display: flex;
    align-items: center;
    padding-top: 5rem;

    .portrait {
      width: 30%;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;

      img {
        width: 12rem;
        height: auto;
      }

      .pyramid-container {
        right: 2rem;
        bottom: 2rem;
      }
    }
  }

  @media(min-width: 1200px) {
    .portrait {
      img {
        width: 16rem;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 2.5rem 1.2rem;

  section {
    h4 {
      font-size: 1.6rem;
    }

    .content-text {
      margin: 2.5rem 0;

      p {
        color: ${({ theme }) => theme.colors.secondary_text}
      }

      strong {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }

    p + p {
      margin-top: 1.5rem;
    }
  }

  @media(min-width: 780px) and (max-width: 1000px) {
    width: 85%;
    margin: 0 auto;
  }

  @media(min-width: 1000px) {
    width: 62%;
    padding: 3rem 0;
    margin-left: 30%;

    section {
      h4 {
        font-size: 1.7rem;
      }

      .content-text {
        margin: 3.8rem 0;

        p {
          font-size: 1.1rem;
        }
      }

      p + p {
        margin-top: 2rem;
      }
    }
  }

  @media(min-width: 1200px) {
    section {
      h4 {
        font-size: 1.8rem;
      }

      .content-text {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
