import Button from '../../../../components/Button';
import { slideUp } from '../../../../utils/animations';
import * as S from './styles';

interface Props {
  onClick: (direction: string, path: string) => any;
}

const Buttons: React.FC<Props> = ({ onClick }) => (
  <S.Container
    variants={slideUp}
    initial="hidden"
    animate="visible"
  >
    <Button
      origin="home"
      onClick={() => onClick('left', '/skills')}
    >
      <span className="button skills">SKILLS</span>
    </Button>

    <Button
      origin="home"
      onClick={() => onClick('right', '/about')}
    >
      <span className="button about">ABOUT</span>
    </Button>

    <Button
      origin="home"
      onClick={() => onClick('bottom', '/projects')}
    >
      <span className="button projects">PROJECTS</span>
    </Button>
  </S.Container>
);

export default Buttons;
