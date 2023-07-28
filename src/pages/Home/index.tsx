import BGParticles from '../../components/BGParticles';
import Switch from '../../components/Switch';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';
import * as S from './styles';

const Home: React.FC = () => {
  const containerRef = useMobileHeightFix('height');

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef}
    >
      <BGParticles />
      Home

      <div className="switch">
        <Switch />
      </div>
    </S.Container>
  );
};

export default Home;
