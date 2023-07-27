export interface IButton {
  label: string;
  link: string;
}

export const buttons: IButton[] = [
  {
    label: 'home',
    link: '/',
  },
  {
    label: 'projects',
    link: '/projects',
  },
  {
    label: 'skills',
    link: '/skills',
  },
  {
    label: 'about',
    link: '/about',
  },
];
