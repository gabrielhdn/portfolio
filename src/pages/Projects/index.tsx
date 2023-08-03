import Header from '../../components/Header';
import Project from './components/Project';
import Pyramid from '../../components/Pyramid';

import projects from '../../utils/projects';
import { pageSlideTop } from '../../utils/animations';
import * as S from './styles';

function Projects() {
  return (
    <S.Container
      variants={pageSlideTop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header />

      <S.Content>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </S.Content>

      <div className="pyramid-container">
        <Pyramid />
      </div>
    </S.Container>
  );
}

export default Projects;
