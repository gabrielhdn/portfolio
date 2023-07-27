import { useEffect, useState } from 'react';
import gif from '../../assets/gifs/intro.gif';
import * as S from './styles';

const Intro = () => {
  const [gifAnimation, setGifAnimation] = useState<boolean>(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setGifAnimation(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <S.Container
      exit={{ y: '-100vh' }}
      transition={{ ease: 'easeIn', duration: '.6' }}
    >
      {/* Math.random() forces the browser to re-download the gif on page refresh */}
      {gifAnimation && <img src={`${gif}?${Math.random()}`} alt="Intro Animation" />}
    </S.Container>
  );
};

export default Intro;
