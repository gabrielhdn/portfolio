import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { switchAnimation } from '../../utils/animations';

import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';
import * as S from './styles';

const Switch: React.FC = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <S.Container onClick={handleToggleTheme}>
      <motion.div
        layout
        className="handle"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.img
            src={theme.title === 'dark' ? moon : sun}
            alt="Switch Icon"
            className="icon"
            key={theme.title}
            variants={switchAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
      </motion.div>
    </S.Container>
  );
};

export default Switch;
