/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

interface Props {
  text: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.05, delayChildren: 1.5 },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // type: 'spring',
      // damping: 12,
      // stiffness: 100,
      // type: 'tween',
      ease: 'easeIn',
    },
  },
};

const AnimatedText = ({ text }: Props) => {
  // const words = useMemo(() => text.split(' '), [text]);
  const words = text.split(' ');

  return (
    <S.Container variants={container} initial="hidden" animate="visible">
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <S.WordWrapper selected={word.includes('gabriel')}>
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span key={letterIndex} variants={child}>
                {letter}
              </motion.span>
            ))}
          </S.WordWrapper>
          {/* sets spacing after each word but the last one */}
          {wordIndex !== words.length - 1 && <S.Space />}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default AnimatedText;
