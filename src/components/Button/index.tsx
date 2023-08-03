import * as S from './styles';

interface Props {
  origin: string;
  onClick?: () => any;
  children: React.ReactNode;
  selected?: boolean;
}

const Button: React.FC<Props> = ({
  origin, onClick, children, selected,
}) => (
  <S.Button
    type="button"
    origin={origin}
    selected={selected}
    onClick={onClick}
  >
    {children}
  </S.Button>
);

export default Button;
