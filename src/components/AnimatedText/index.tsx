/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

interface Props {
  text: string;
}

const AnimatedText = ({ text }: Props) => {
  const words = text.split(' ');

  return (
    <S.Container>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <S.WordWrapper selected={word.includes('gabriel')}>
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  type: 'tween',
                  ease: 'easeInOut',
                  delay: (1.4 + Math.random() * 0.6),
                  y: {
                    duration: 0.4,
                  },
                }}
              >
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
