import { Link } from 'react-router-dom';
import * as S from './styles';

import {
  Github, Linkedin, Instagram, Gmail,
} from '../../../../components/Header/components/Socials/styles';

const Socials = () => (
  <S.Container>
    <div className="icons">
      <Link to="https://github.com/gabrielhdn" target="_blank">
        <Github $color="#9E5EB8" />
      </Link>

      <Link to="https://www.linkedin.com/in/gabrielherdina/" target="_blank">
        <Linkedin $color="#2E67C2" />
      </Link>

      <Link to="https://www.instagram.com/gabrielhdn/" target="_blank">
        <Instagram $color="#D9387A" />
      </Link>

      <Link to="mailto:gherdina7@gmail.com" target="_blank">
        <Gmail $color="#DF4943" />
      </Link>
    </div>

    <span className="base" />
  </S.Container>
);

export default Socials;
