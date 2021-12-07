import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from 'context/StateProvider';
import { signUpUser } from '../../http/auth';
import {
  setLoggedUser,
  setLoggedUserError,
  setLoggedUserLoading,
} from 'context/actions';
import { createEffect } from 'context/effects';
import { validations } from 'utils/validations';
import { isEmptyObject } from 'utils/functions';
import ROUTES from 'config/routes';
import * as classes from './signUp.module.css';

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const [
    {
      loggedUser: { loading, error },
    },
    dispatch,
  ] = useStateValue();

  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      username,
      firstName,
      lastName,
      email,
      password,
      birthDate,
    };

    createEffect(
      dispatch,
      signUpUser.bind(this, params),
      setLoggedUserLoading,
      setLoggedUser,
      setLoggedUserError
    ).then(() => navigate(`/${ROUTES.DASHBOARD}`));
  }

  const handleFormChange = ({ target: { name, value } }) =>
    setFormErrors(validations(name, value));

  const shouldDisable = () =>
    (formErrors && !isEmptyObject(formErrors)) ||
    !username ||
    !password ||
    !firstName ||
    !lastName ||
    !email ||
    !birthDate;

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      className={classes['signup-form']}
    >
      <h2>Sign Up</h2>
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
        <span>FirstName:</span>
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      {formErrors?.firstName && (
        <p className="error">{formErrors?.firstName}</p>
      )}
      <label>
        <span>LastName:</span>
        <input
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </label>
      {formErrors?.lastName && <p className="error">{formErrors?.lastName}</p>}
      <label>
        <span>Email:</span>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      {formErrors?.email && <p className="error">{formErrors?.email}</p>}
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
      <label>
        <span>BirthDate:</span>
        <input
          type="date"
          name="birthDate"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
        />
      </label>
      {formErrors?.birthDate && <p>{formErrors?.birthDate}</p>}
      {!loading && (
        <button disabled={shouldDisable()} className="btn">
          Sign Up
        </button>
      )}
      {loading && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export { SignUp };
