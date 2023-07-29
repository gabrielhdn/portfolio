import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IWordWrapper {
  selected: boolean;
}

export const Container = styled(motion.p)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
