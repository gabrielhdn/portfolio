import { Link } from 'react-router-dom';
import { icons } from '../../../../utils/mediaIcons';
import * as S from './styles';

const Socials = () => (
  <S.Container>
    {icons.map(({ to, icon: Icon, color }) => (
      <Link key={to} to={to} target="_blank">
        <Icon $color={color} />
      </Link>
    ))}
  </S.Container>
);

export default Socials;
