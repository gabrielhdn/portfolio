/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

interface Props {
  text: string;
  marked?: string;
  delay: number;
  justify: string;
}

const AnimatedText = ({
  text, marked, delay, justify,
}: Props) => {
  const words = text.split(' ');

  return (
    <S.Container justify={justify}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <S.WordWrapper selected={marked ? word.includes(marked) : false}>
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  type: 'tween',
                  ease: 'easeInOut',
                  delay: (delay + Math.random() * 0.6),
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
