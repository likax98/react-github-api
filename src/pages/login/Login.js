import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { signInUser } from '../../http/auth';
import {
  setLoggedUser,
  setLoggedUserError,
  setLoggedUserLoading,
} from '../../context/actions';
import { createEffect } from '../../context/effects';
import { validations } from '../../utils/validations';
import { isEmptyObject } from '../../utils/functions';
import ROUTES from '../../config/routes';
import * as classes from './login.module.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [
    {
      loggedUser: { loading, error },
    },
    dispatch,
  ] = useStateValue();

  function handleSubmit(e) {
    e.preventDefault();
    createEffect(
      dispatch,
      signInUser.bind(this, { username, password }),
      setLoggedUserLoading,
      setLoggedUser,
      setLoggedUserError
    ).then((resp) => {
      if (resp) {
        navigate(`/${ROUTES.DASHBOARD}`);
      }
    });
  }

  const handleFormChange = ({ target: { name, value } }) =>
    setFormErrors(validations(name, value));

  const shouldDisable = () =>
    (formErrors && !isEmptyObject(formErrors)) || !username || !password;

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      className={classes['login-form']}
    >
      <h2>login</h2>
      <label>
        <span>Username:</span>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      {formErrors?.username && <p className="error">{formErrors?.username}</p>}
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {formErrors?.password && <p className="error">{formErrors?.password}</p>}
      {!loading && (
        <button className="btn" disabled={shouldDisable()}>
          Login
        </button>
      )}
      {loading && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p className="error">{error}</p>}
      <h4>Do not have an account yet? <Link to={ROUTES.SIGNUP}>Sign Up</Link></h4>
    </form>
  );
}

export { Login };
