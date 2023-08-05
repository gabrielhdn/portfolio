import Header from '../../components/Header';
import SkillSection from './components/SkillSection';
import Pyramid from '../../components/Pyramid';
import Footer from '../../components/Footer';

import { pageSlideRight } from '../../utils/animations';
import skills, { sectionMapping, sections } from '../../utils/skills';
import * as S from './styles';

const Skills = () => (
  <S.Container
    variants={pageSlideRight}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
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

    <Footer />

    <div className="pyramid-container">
      <Pyramid />
    </div>
  </S.Container>
);

export default Skills;
