import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { icons } from '../../../../utils/mediaIcons';
import { popIcons, iconContainerAnimation, slideUp } from '../../../../utils/animations';
import * as S from './styles';

const Socials = () => (
  <S.Container>
    <motion.div
      variants={iconContainerAnimation}
      initial="hidden"
      animate="visible"
      className="icons"
    >
      {icons.map(({ to, icon: Icon, color }) => (
        <motion.div
          variants={popIcons}
          key={color}
        >
          <Link to={to} target="_blank">
            <Icon $color={color} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
    <motion.span
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="base"
    />
  </S.Container>
);

export default Socials;
