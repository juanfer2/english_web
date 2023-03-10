import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, GerunsAndInfinitives } from '@/pages';
import PrivateRoute from './PrivateRoutes';

interface PageI {
  name: string;
  path: string;
  element: React.ReactNode;
}

function RoutesConfig() {
  const pages = [
    {
      name: 'home',
      path: '/',
      element: <Home />
    },
    {
      name: 'geruns_and_infinitives',
      path: '/geruns_and_infinitives',
      element: <GerunsAndInfinitives />
    },
    {
      name: 'page-not-found',
      path: '/*',
      element: <div>Page not found!!!</div>
    }
  ];

  const pagesPrivate: PageI[] = [];
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<PrivateRoute />}>
        {pagesPrivate.map((page: PageI) => (
          <Route key={page.name} path={page.path} element={page.element} />
        ))}
      </Route>

      {pages.map((page: PageI) => (
        <Route key={`${page.name}`} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
