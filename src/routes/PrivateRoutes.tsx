import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuth } from '@/middlewares/authentication.middleware';

/* eslint no-unused-vars: ["off"] */
function PrivateRoutes({ component: Component, redirectTo, path, ...props }: any): JSX.Element {
  const auth = isAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
