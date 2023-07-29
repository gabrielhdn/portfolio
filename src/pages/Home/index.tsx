import { IoTriangleSharp } from 'react-icons/io5';

import BGParticles from '../../components/BGParticles';
import Switch from '../../components/Switch';
import Buttons from './components/Buttons';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';
import { useTheme } from '../../context/ThemeContext';

import BlackLogo from '../../assets/images/LogoBlack.svg';
import WhiteLogo from '../../assets/images/Logo.svg';
import * as S from './styles';
import Socials from './components/Socials';

const Home: React.FC = () => {
  const containerRef = useMobileHeightFix('height');
  const { theme } = useTheme();
  const { title } = theme;

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        <div className="introduction">
          <p>welcome!</p>
          <p>
            i&apos;m
            {' '}
            <span>gabriel</span>
            {' '}
            herdina,
          </p>
          <p>front-end developer based in curitiba, brazil.</p>
        </div>

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
