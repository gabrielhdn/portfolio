import Header from '../../components/Header';
import SkillSection from './components/SkillSection';
import skills, { sectionMapping, sections } from '../../utils/skills';
import * as S from './styles';

function Skills() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        {sections.map((section) => (
          <SkillSection
            key={section}
            skills={skills[sectionMapping[section]]}
            title={section}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}

export default Skills;
