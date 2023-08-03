import { useState } from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import AnimatedText from '../../components/AnimatedText';
import BGParticles from '../../components/BGParticles';
import Switch from '../../components/Switch';
import Buttons from './components/Buttons';
import Socials from './components/Socials';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';
import { useTheme } from '../../context/ThemeContext';

import {
  slideLeft, pageSlideLeft, pageSlideRight, pageSlideBottom,
} from '../../utils/animations';

import BlackLogo from '../../assets/images/LogoBlack.svg';
import WhiteLogo from '../../assets/images/Logo.svg';
import * as S from './styles';

const Home: React.FC = () => {
  const [slideDirection, setSlideDirection] = useState<string>('left');
  const containerRef = useMobileHeightFix('height');
  const navigate = useNavigate();

  const { theme: { title } } = useTheme();

  const handleClick = (direction: string, path: string) => {
    switch (direction) {
      case 'left':
        setSlideDirection('left');
        break;
      case 'right':
        setSlideDirection('right');
        break;
      case 'bottom':
        setSlideDirection('bottom');
        break;
      default:
    }

    navigate(path);
  };

  const setContainerVariant = () => {
    switch (slideDirection) {
      case 'left':
        return pageSlideLeft;
      case 'right':
        return pageSlideRight;
      case 'bottom':
        return pageSlideBottom;
      default:
    }

    return pageSlideLeft;
  };

  return (
    <S.Container
      variants={setContainerVariant()}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={containerRef}
    >
      <BGParticles />
      <Socials />

      <header>
        <img
          src={title === 'dark' ? WhiteLogo : BlackLogo}
          alt="Gabriel Herdina"
          className="logo"
        />

        <Switch />
      </header>

      <S.ContentContainer>
        <motion.div
          variants={slideDirection === 'bottom' ? slideLeft : undefined}
          className="introduction"
        >
          <AnimatedText
            text="welcome!"
            delay={1.4}
            justify="center"
          />
          <AnimatedText
            text="i'm gabriel herdina,"
            marked="gabriel"
            delay={1.4}
            justify="center"
          />
          <AnimatedText
            text="front-end developer based in curitiba, brazil."
            delay={1.4}
            justify="center"
          />
        </motion.div>

        <IoTriangleSharp
          color={title === 'dark' ? '#FFF' : '#222'}
          size={15}
        />

        <Buttons onClick={handleClick} />
      </S.ContentContainer>
    </S.Container>
  );
};

export default Home;
