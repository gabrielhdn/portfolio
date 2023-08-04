import { useEffect, useState } from 'react';
import gif from '../../assets/animations/intro.gif';
import * as S from './styles';
import useMobileHeightFix from '../../hooks/useMobileHeightFix';

const Intro = () => {
  const [gifAnimation, setGifAnimation] = useState<boolean>(true);
  const containerRef = useMobileHeightFix('height');

  useEffect(() => {
    const id = setTimeout(() => {
      setGifAnimation(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <S.Container
      ref={containerRef}
      exit={{ y: '-100vh' }}
      transition={{ ease: 'easeIn', duration: '.6' }}
    >
      {/* Math.random() forces the browser to re-download the gif on page refresh */}
      {gifAnimation && <img src={`${gif}?${Math.random()}`} alt="Intro Animation" />}
    </S.Container>
  );
};

export default Intro;
