import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Dashboard, Search, Favorites, NotFound } from './pages';
import { User } from './components';
import ROUTES from './config/routes';

function RoutesLibrary() {
  const user = true;
  return (
    <Routes>
      <Route
        path={ROUTES.MAIN}
        render={() =>
          user ? (
            <Navigate to={ROUTES.DASHBOARD} />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      ></Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.USER} element={<User />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesLibrary;
