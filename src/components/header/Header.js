import { useStateValue } from '../../context/StateProvider';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { removeLoggedUser } from '../../context/actions';
import ROUTES from '../../config/routes';
import * as classes from './header.module.css';

function Header() {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  function logoutHandler() {
    dispatch(removeLoggedUser());
    navigate(`${ROUTES.MAIN}`);
  }

  return (
    <div className={classes.container__Header}>
      <NavLink to={`${ROUTES.DASHBOARD}`}>
      <h4 className={classes.fav__logo}>Github API</h4>
      </NavLink>
      <div className={classes.menuitems}>
        <NavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header}>
            Dashboard
          </h4>
        </NavLink>
        <NavLink
          to={ROUTES.SEARCH}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header}>
            Search
          </h4>
        </NavLink>

        <NavLink
          to={ROUTES.FAVORITES}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header}>Favorites</h4>
        </NavLink>
        <Link to={ROUTES.MAIN}>
          <h4 className={classes.fav__Header} onClick={logoutHandler}>
            Logout
          </h4>
        </Link>
      </div>
    </div>
  );
}

export { Header };
