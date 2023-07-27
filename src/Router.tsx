import { cloneElement } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';

const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/projects', element: <Projects /> },
    { path: '/skills', element: <Skills /> },
    { path: '/about', element: <About /> },
  ]);

  const { pathname } = useLocation();

  if (!routes) return null;

  return (
    <AnimatePresence mode="wait">
      {cloneElement(routes, { key: pathname })}
    </AnimatePresence>
  );
};

export default Router;
