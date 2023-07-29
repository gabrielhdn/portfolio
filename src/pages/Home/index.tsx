import { useState } from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
// import AnimatedText from '../../components/AnimatedText';

const Home: React.FC = () => {
  const [slideDirection, setSlideDirection] = useState<string>('left');
  const containerRef = useMobileHeightFix('height');
  const navigate = useNavigate();

  const { theme } = useTheme();
  const { title } = theme;

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

        <div className="switch">
          <Switch />
        </div>
      </header>

      <S.ContentContainer>
        <motion.div
          variants={slideLeft}
          className="introduction"
        >
          <p>welcome!</p>
          <p>
            i&apos;m
            {' '}
            <span>gabriel</span>
            {' '}
            herdina,
          </p>
          <p>front-end developer based in curitiba, brazil.</p>
          {/* <AnimatedText text="welcome!" />
          <AnimatedText text="i'm gabriel herdina," />
          <AnimatedText text="front-end developer based in curitiba, brazil." /> */}
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
