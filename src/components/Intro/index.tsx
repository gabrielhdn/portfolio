import { useEffect, useRef, useState } from 'react';
import gif from '../../assets/gifs/intro.gif';
import * as S from './styles';

const Intro = () => {
  const [gifAnimation, setGifAnimation] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setGifAnimation(false);
    }, 2000);

    if (containerRef.current) {
      const deviceWidth = window.matchMedia('(max-width: 1024px)');

      if (deviceWidth.matches) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    }

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
