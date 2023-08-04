/* eslint-disable new-cap */
/* eslint-disable no-new */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hoverEffect from 'hover-effect';

import AnimatedText from '../../../../components/AnimatedText';
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader';

import { IProject } from '../../../../utils/projects';
import { slideLeftImediate, slideRightImediate } from '../../../../utils/animations';
import * as S from './styles';

interface Props {
  project: IProject;
}

const Project: React.FC<Props> = ({ project }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // sets "new hoverEffect" to happen after the animations, otherwise it'll bug them

    const timeoutOne = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    let timeoutTwo: number;

    if (hoverRef.current) {
      timeoutTwo = setTimeout(() => {
        new hoverEffect({
          parent: hoverRef.current,
          intensity: 0.4,
          image1: project.images.one,
          image2: project.images.two,
          displacementImage: project.images.displacement,
          angle: Math.PI / 8,
          speedIn: 1,
          speedOut: 1,
          imagesRatio: 480 / 854,
        });
      }, 1150);
    }

    return () => {
      clearTimeout(timeoutOne);
      clearTimeout(timeoutTwo);
    };
  }, [project]);

  return (
    <S.Container>
      <S.Text
        variants={slideLeftImediate}
        initial="hidden"
        whileInView="visible"
      >
        <span className="index">{project.id}</span>
        <AnimatedText text={project.name} delay={0} justify="flex-start" />

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
      >
        {project.id.includes('1') && <span>touch it!</span>}
        <Loader isLoading={isLoading} />
      </S.Image>
    </S.Container>
  );
};

export default Project;
