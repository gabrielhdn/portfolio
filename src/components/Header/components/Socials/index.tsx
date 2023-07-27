import { Link } from 'react-router-dom';
import * as S from './styles';

const Socials = () => (
  <S.Container>
    <Link to="https://github.com/gabrielhdn">
      <S.Github $color="#9E5EB8" />
    </Link>

    <Link to="https://www.linkedin.com/in/gabrielherdina/">
      <S.Linkedin $color="#2E67C2" />
    </Link>

    <Link to="https://www.instagram.com/gabrielhdn/">
      <S.Instagram $color="#D9387A" />
    </Link>

    <Link to="mailto:gherdina7@gmail.com">
      <S.Gmail $color="#DF4943" />
    </Link>
  </S.Container>
);

export default Socials;