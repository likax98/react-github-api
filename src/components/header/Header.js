import { useStateValue } from 'context/StateProvider';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { setUser } from 'context/actions';
import ROUTES from 'config/routes';
import './header.css';

function Header() {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  function loginHandler() {
    dispatch(setUser(null));
    navigate(ROUTES.LOGIN);
  }

  return (
    <div className="container__Header">
      <NavLink to="/dashboard">
        <img src="/images/logo.png" alt="logo" />
      </NavLink>
      <div className="menuitems">
        <NavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <h4 className="fav__Header" onClick={loginHandler}>
            Dashboard
          </h4>
        </NavLink>
        <NavLink
          to={ROUTES.SEARCH}
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <h4 className="fav__Header" onClick={loginHandler}>
            Search
          </h4>
        </NavLink>

        <NavLink
          to={ROUTES.FAVORITES}
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <h4 className="fav__Header">Favorites</h4>
        </NavLink>
        <NavLink to={ROUTES.LOGIN}>
          <h4 className="fav__Header" onClick={loginHandler}>
            Logout
          </h4>
        </NavLink>
      </div>
    </div>
  );
}

export { Header };
