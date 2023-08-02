import { useEffect, useRef } from 'react';
import * as S from './styles';

const Pyramid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotatePyramid = () => {
      const pyramid = containerRef.current;

      if (pyramid) pyramid.style.transform = `rotateX(-20deg) rotateY(${window.scrollY}deg)`;
    };

    window.addEventListener('scroll', rotatePyramid);

    return () => window.removeEventListener('scroll', rotatePyramid);
  });

  return (
    <S.Container ref={containerRef}>
      <div className="pyramid">
        <S.PyramidSide index={0} />
        <S.PyramidSide index={1} />
        <S.PyramidSide index={2} />
        <S.PyramidSide index={3} />
      </div>
    </S.Container>
  );
};

export default Pyramid;
