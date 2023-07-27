import { useEffect, useState } from 'react';
import { slideUp } from '../../utils/animations';
import gif from '../../assets/gifs/intro.gif';
import * as S from './styles';

const Intro = () => {
  const [stopGif, setStopGif] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setStopGif(true);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <S.Container
      variants={slideUp}
      exit="exit"
    >
      {/* Math.random() forces the browser to re-download the gif on page refresh */}
      {!stopGif && <img src={`${gif}?${Math.random()}`} alt="Intro Animation" />}
    </S.Container>
  );
};

export default Intro;
