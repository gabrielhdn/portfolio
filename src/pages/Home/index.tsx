import { IoTriangleSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

import BGParticles from '../../components/BGParticles';
import Switch from '../../components/Switch';
import Buttons from './components/Buttons';
import Socials from './components/Socials';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';
import { useTheme } from '../../context/ThemeContext';

import BlackLogo from '../../assets/images/LogoBlack.svg';
import WhiteLogo from '../../assets/images/Logo.svg';
import { fadeIn, slideLeft } from '../../utils/animations';
import * as S from './styles';
// import AnimatedText from '../../components/AnimatedText';

const Home: React.FC = () => {
  const containerRef = useMobileHeightFix('height');
  const { theme } = useTheme();
  const { title } = theme;

  return (
    <S.Container
      variants={fadeIn}
      initial="hidden"
      animate="visible"
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

        <Buttons />
      </S.ContentContainer>
    </S.Container>
  );
};

export default Home;
