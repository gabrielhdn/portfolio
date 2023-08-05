import AnimatedText from '../../../../components/AnimatedText';
import { ISkill } from '../../../../utils/skills';
import * as S from './styles';

interface Props {
  skills: ISkill[];
  title: string;
}

const SkillSection: React.FC<Props> = ({ skills, title }) => (
  <S.Container>
    <AnimatedText
      text={`_ ${title}`}
      marked="_"
      delay={0}
      justify="flex-start"
    />

    <div className="cards">
      {skills.map(({
        id, name, color, icon: Icon,
      }) => (
        <S.Card
          key={id}
          tiltReverse
          transitionSpeed={350}
          color={color}
          perspective={800}
        >
          <Icon className="icon" />
          {id === 1 && <S.TouchIcon size={20} />}
          <span>{name}</span>
        </S.Card>
      ))}
    </div>
  </S.Container>
);

export default SkillSection;
