import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from 'context/StateProvider';
import './login.css';

function Login() {
  let navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const loginHandler = () => {
    dispatch({
      type: 'SET_USER',
      user: true,
    });
    navigate('/dashboard');
  };
  return (
    <div className="container__Login">
      <input type="text" placeholder="username..." className="input" />
      <input type="password" placeholder="password..." className="input" />
      <button onClick={loginHandler} className="btn">
        Login
      </button>
    </div>
  );
}

export { Login };
