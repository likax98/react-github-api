// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useStateValue } from './context/StateProvider';
import { Login, SignUp, Dashboard, Search, Favorites, NotFound } from './pages';
import { User } from './components';
import ROUTES from './config/routes';

function RoutesLibrary() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [
  //   {
  //     loggedUser: { isLogged },
  //   },
  // ] = useStateValue();

  // useEffect(() => {
  //   // ცოტა არასვეცკი გარდის იდეის იმპლემენტაცია, 
  //   //ოდნავ არასწორი იდეით რომელიც wildCard-ზე ირევა:დ

  //   let isMounted = true;
  //   const { pathname } = location;
  //   const passPaths = pathname.includes(ROUTES.SIGNUP);
  //   if (isMounted && !isLogged && !passPaths) {
  //     setTimeout(() => {
  //       navigate(`${ROUTES.MAIN}`);
  //     }, 100);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

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
