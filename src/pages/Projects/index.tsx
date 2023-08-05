import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Project from './components/Project';
import Pyramid from '../../components/Pyramid';

import projects from '../../utils/projects';
import { pageSlideTop } from '../../utils/animations';
import * as S from './styles';

const Projects = () => (
  <S.Container
    variants={pageSlideTop}
    exit="exit"
  >
    <Header />

    <S.Content>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </S.Content>

    <Footer />

    <div className="pyramid-container">
      <Pyramid />
    </div>
  </S.Container>
);

export default Projects;
