import Button from '../../../../components/Button';
import { springUp } from '../../../../utils/animations';
import * as S from './styles';

const Buttons = () => (
  <S.Container
    variants={springUp}
    initial="hidden"
    animate="visible"
  >
    <Button
      origin="home"
      onClick={() => console.log('F')}
    >
      <span className="button skills">SKILLS</span>
    </Button>

    <Button
      origin="home"
      onClick={() => console.log('F')}
    >
      <span className="button about">ABOUT</span>
    </Button>

    <Button
      origin="home"
      onClick={() => console.log('F')}
    >
      <span className="button projects">PROJECTS</span>
    </Button>
  </S.Container>
);

export default Buttons;
