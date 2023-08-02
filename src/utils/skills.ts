import { GiCrossedSwords } from 'react-icons/gi';
import {
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiStyledcomponents,
  SiFramer,
  SiNodedotjs,
  SiNodemon,
  SiInsomnia,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiMongodb,
  SiJest,
  SiTestinglibrary,
  SiMocha,
  SiChai,
} from 'react-icons/si';

export interface ISkill {
  id: number;
  name: string;
  color: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ISkills {
  universal: ISkill[],
  frontend: ISkill[],
  backend: ISkill[],
  testing: ISkill[],
}

const skills: ISkills = {
  universal: [
    {
      id: 1,
      name: 'javascript',
      color: '#F7E017',
      icon: SiJavascript,
    },
    {
      id: 2,
      name: 'typescript',
      color: '#3179C7',
      icon: SiTypescript,
    },
    {
      id: 3,
      name: 'git',
      color: '#F05033',
      icon: SiGit,
    },
    {
      id: 4,
      name: 'docker',
      color: '#1E3F8C',
      icon: SiDocker,
    },
  ],
  frontend: [
    {
      id: 1,
      name: 'html',
      color: '#F75723',
      icon: SiHtml5,
    },
    {
      id: 2,
      name: 'css',
      color: '#3178BF',
      icon: SiCss3,
    },
    {
      id: 3,
      name: 'react',
      color: '#65DBFB',
      icon: SiReact,
    },
    {
      id: 4,
      name: 'redux',
      color: '#7950BE',
      icon: SiRedux,
    },
    {
      id: 5,
      name: 'react router',
      color: '#D01627',
      icon: SiReactrouter,
    },
    {
      id: 6,
      name: 'styled components',
      color: '#EFB8EA',
      icon: SiStyledcomponents,
    },
    {
      id: 7,
      name: 'framer motion',
      color: '#080808',
      icon: SiFramer,
    },
  ],
  backend: [
    {
      id: 1,
      name: 'node',
      color: '#56A645',
      icon: SiNodedotjs,
    },
    {
      id: 2,
      name: 'nodemon',
      color: '#76D04B',
      icon: SiNodemon,
    },
    {
      id: 3,
      name: 'insomnia',
      color: '#35007F',
      icon: SiInsomnia,
    },
    {
      id: 4,
      name: 'express',
      color: '#353535',
      icon: SiExpress,
    },
    {
      id: 5,
      name: 'sequelize',
      color: '#3C76C3',
      icon: SiSequelize,
    },
    {
      id: 6,
      name: 'mysql',
      color: '#23758F',
      icon: SiMysql,
    },
    {
      id: 7,
      name: 'mongodb',
      color: '#4BA13E',
      icon: SiMongodb,
    },
  ],
  testing: [
    {
      id: 1,
      name: 'jest',
      color: '#AC3E59',
      icon: SiJest,
    },
    {
      id: 2,
      name: 'react testing library',
      color: '#E43938',
      icon: SiTestinglibrary,
    },
    {
      id: 3,
      name: 'mocha',
      color: '#886446',
      icon: SiMocha,
    },
    {
      id: 4,
      name: 'chai',
      color: '#A40B01',
      icon: SiChai,
    },
    {
      id: 5,
      name: 'sinon',
      color: '#87543C',
      icon: GiCrossedSwords,
    },
  ],
};

export const sections = ['universal', 'front-end', 'back-end', 'testing'];

export const sectionMapping: { [key: string]: keyof ISkills } = {
  universal: 'universal',
  'front-end': 'frontend',
  'back-end': 'backend',
  testing: 'testing',
};

export default skills;
