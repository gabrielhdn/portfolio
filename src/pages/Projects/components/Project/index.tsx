/* eslint-disable new-cap */
/* eslint-disable no-new */

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hoverEffect from 'hover-effect';

import AnimatedText from '../../../../components/AnimatedText';
import Button from '../../../../components/Button';

import { IProject } from '../../../../utils/projects';
import { slideLeftImediate, slideRightImediate } from '../../../../utils/animations';
import * as S from './styles';

interface Props {
  project: IProject;
}

const Project: React.FC<Props> = ({ project }) => {
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoverRef.current) {
      new hoverEffect({
        parent: hoverRef.current,
        intensity: 0.4,
        image1: project.images.one,
        image2: project.images.two,
        displacementImage: project.images.displacement,
        angle: Math.PI / 8,
        speedIn: 1,
        speedOut: 1,
        // imagesRatio: 0.5,
        imagesRatio: 480 / 854,
      });
    }
  }, [project]);

  return (
    <S.Container>
      <S.Text
        variants={slideLeftImediate}
        initial="hidden"
        whileInView="visible"
      >
        <span className="index">{project.id}</span>
        <AnimatedText text={project.name} delay={0.5} justify="flex-start" />

        <div className="description">
          {project.description.map((paragraph) => (
            <p key={paragraph.split(' ')[0]}>{paragraph}</p>
          ))}
        </div>

        <div className="buttons">
          <Link to={project.urls.code} target="_blank">
            <Button origin="projects">CODE</Button>
          </Link>

          {project.urls.app && (
            <Link to={project.urls.app} target="_blank">
              <Button origin="projects">APP</Button>
            </Link>
          )}
        </div>
      </S.Text>

      <S.Image
        ref={hoverRef}
        variants={slideRightImediate}
        initial="hidden"
        whileInView="visible"
      />
    </S.Container>
  );
};

export default Project;
