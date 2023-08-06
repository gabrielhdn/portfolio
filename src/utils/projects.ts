import {
  beats1,
  beats2,
  contacts1,
  contacts2,
  trivia1,
  trivia2,
  trunfo1,
  trunfo2,
  wallet1,
  wallet2,
} from '../assets/images/projects';

import {
  clouds,
  plasma,
  prism,
  triangles,
  waves,
} from '../assets/images/displacement';

export interface IProject {
  id: string;
  name: string;
  description: string[];
  images: {
    one: string;
    two: string;
    displacement: string;
  };
  urls: {
    code: string;
    app?: string;
  };
}

const projects: IProject[] = [
  {
    id: '_ 01',
    name: 'HERDZ BEATS',
    description: [
      'HerdzBeats is a music application that uses Apple\'s API to search for artists and albums from all around the world. It provides audio previews and features to save tracks as favorites and edit user profiles. The data is persisted through local storage.',
      'Built with class components and pure CSS. It was also my first app using React Router. This version is responsive and works well on mobile devices.',
    ],
    images: {
      one: beats1,
      two: beats2,
      displacement: prism,
    },
    urls: {
      code: 'https://github.com/gabrielhdn/herdz-beats',
      app: 'https://gabrielhdn.github.io/herdz-beats/',
    },
  },
  {
    id: '_ 02',
    name: 'ASSASSIN\'S TRUNFO',
    description: [
      'Assassin\'s Trunfo was the first project I built using state manipulation in React.js, right when I started learning the library. The idea was to create a deck of cards based on the classic game "top trumps". For that, I chose the Assassin\'s Creed theme.',
      'The user can customize the cards however he wants, completing fields for character\'s name, description, attributes and rarity - as well as being able to send an image url. The application has real-time card preview, different search filters for the deck and data storage (via browser\'s local storage). Made with class components and pure CSS. Responsive.',
    ],
    images: {
      one: trunfo1,
      two: trunfo2,
      displacement: waves,
    },
    urls: {
      code: 'https://github.com/gabrielhdn/top-trumps',
      app: 'https://gabrielhdn.github.io/top-trumps/',
    },
  },
  {
    id: '_ 03',
    name: 'CYBER TRIVIA',
    description: [
      'Cyberpunk is a genre defined by the fusion of references from the last century with technological dystopias. Hence the idea of CyberTrivia, a quiz game inspired by the 80\'s visuals - precisely when trivia boards became popular worldwide.',
      'The player can choose settings such as number of questions, difficulty level and specific categories. There\'s also a user ranking system based on the speed at which questions are correctly answered (data persists through local storage). The application is fully responsive and was made with class components, pure CSS, Redux, React Router, React Portals and React Testing Library.',
    ],
    images: {
      one: trivia1,
      two: trivia2,
      displacement: triangles,
    },
    urls: {
      code: 'https://github.com/gabrielhdn/cybertrivia',
      app: 'https://gabrielhdn.github.io/cybertrivia/',
    },
  },
  {
    id: '_ 04',
    name: 'MY WALLET',
    description: [
      'MyWallet is an expense tracking application created with React.js and Redux. The idea is to maintain an online wallet with comprehensive monitoring: amount, description, payment method and expense type.',
      'The project plays with conversion rates. You can add expenses in foreign currencies and have the value - including the total - converted to Brazilian Real. This was my first project using global state management. It was also developed with pure CSS, class components and React Router. Made for desktop only.',
    ],
    images: {
      one: wallet1,
      two: wallet2,
      displacement: clouds,
    },
    urls: {
      code: 'https://github.com/gabrielhdn/my-wallet',
      app: 'https://gabrielhdn.github.io/my-wallet/',
    },
  },
  {
    id: '_ 05',
    name: 'MY CONTACTS',
    description: [
      'Codewise, MyContacts is my most complete application so far. It\'s a full-stack project that offers a space for the user to build his own permanent contact list - keeping track of names, e-mails, phones and relationship categories. Besides adding new contacts, the user can edit and remove them. The integrity of the data is assured by a back-end built with Express.js and PostgreSQL.',
      'The front-end might look simple, but it actually uses a diversity of tools and design patterns to make the code efficient, clean and scalable. The app has functionalities, for example, to control toasts through event emitters, transform information with data mappers and manage errors and animations with various custom hooks. Responsive and made with Styled Components.',
      'To run properly, this project requires you to initialize the PostgreSQL database beforehand. Instructions are available in the repository.',
    ],
    images: {
      one: contacts1,
      two: contacts2,
      displacement: plasma,
    },
    urls: {
      code: 'https://github.com/gabrielhdn/my-contacts-API',
      app: 'https://gabrielhdn.github.io/my-contacts/',
    },
  },
];

export default projects;
