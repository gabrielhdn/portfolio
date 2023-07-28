import BGParticles from '../../components/BGParticles';
import Switch from '../../components/Switch';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';
import { useTheme } from '../../context/ThemeContext';

import BlackLogo from '../../assets/images/LogoBlack.svg';
import WhiteLogo from '../../assets/images/Logo.svg';
import * as S from './styles';

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

    </S.Container>
  );
};

export default Home;
