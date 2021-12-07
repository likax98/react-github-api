import { useStateValue } from 'context/StateProvider';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { removeLoggedUser } from 'context/actions';
import ROUTES from 'config/routes';
import * as classes from './header.module.css';

function Header() {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  function loginHandler() {
    dispatch(removeLoggedUser());
    navigate(`${ROUTES.MAIN}`);
  }

  return (
    <div className={classes.container__Header}>
      <NavLink to={`${ROUTES.DASHBOARD}`}>
        <img src="/images/logo.png" alt="logo" />
      </NavLink>
      <div className={classes.menuitems}>
        <NavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header} onClick={loginHandler}>
            Dashboard
          </h4>
        </NavLink>
        <NavLink
          to={ROUTES.SEARCH}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header} onClick={loginHandler}>
            Search
          </h4>
        </NavLink>

        <NavLink
          to={ROUTES.FAVORITES}
          className={({ isActive }) => (isActive ? classes.active : null)}
        >
          <h4 className={classes.fav__Header}>Favorites</h4>
        </NavLink>
        <Link to={ROUTES.LOGIN}>
          <h4 className={classes.fav__Header} onClick={loginHandler}>
            Logout
          </h4>
        </Link>
      </div>
    </div>
  );
}

export { Header };
