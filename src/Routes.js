import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, Dashboard, Search, Favorites, NotFound } from './pages';
import { User } from './components';
import ROUTES from './config/routes';

function RoutesLibrary() {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Login />}></Route>
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.USER} element={<User />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.WILDCARD} element={<NotFound />} />
    </Routes>
  );
}

export default RoutesLibrary;
