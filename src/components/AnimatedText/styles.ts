import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IContainer {
  justify: string;
}

interface IWordWrapper {
  selected: boolean;
}

export const Container = styled(motion.h4)<IContainer>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
`;

export const WordWrapper = styled(motion.span)<IWordWrapper>`
  display: flex;
  white-space: nowrap;
  color: ${({ theme, selected }) => selected && theme.colors.highlight};
`;

export const Space = styled.span`
  width: 0.25em;
  display: inline-block;
`;
