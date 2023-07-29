import {
  Github, Linkedin, Instagram, Gmail,
} from '../assets/styles/global';

interface IIcon {
  to: string;
  icon: typeof Github;
  color: string;
}

export const icons: IIcon[] = [
  {
    to: 'https://github.com/gabrielhdn',
    icon: Github,
    color: '#9E5EB8',
  },
  {
    to: 'https://www.linkedin.com/in/gabrielherdina/',
    icon: Linkedin,
    color: '#2E67C2',
  },
  {
    to: 'https://www.instagram.com/gabrielhdn/',
    icon: Instagram,
    color: '#D9387A',
  },
  {
    to: 'mailto:gherdina7@gmail.com',
    icon: Gmail,
    color: '#DF4943',
  },
];
