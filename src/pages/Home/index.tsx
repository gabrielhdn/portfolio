import { useEffect, useRef } from 'react';
import * as S from './styles';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const deviceWidth = window.matchMedia('(max-width: 1024px)');

      if (deviceWidth.matches) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    }
  }, []);

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      ref={containerRef}
    >
      Home
    </S.Container>
  );
};

export default Home;
