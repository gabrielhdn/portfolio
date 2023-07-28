import * as S from './styles';

interface Props {
  origin: string;
  onClick: () => void
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ origin, onClick, children }) => (
  <S.Button
    type="button"
    origin={origin}
    onClick={onClick}
  >
    {children}
  </S.Button>
);

export default Button;
