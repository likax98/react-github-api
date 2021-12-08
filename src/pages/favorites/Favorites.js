import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import { removeFavorites } from '../../context/actions';
import * as classes from './favorites.module.css';

function Favorites() {
  const [{ favorites }, dispatch] = useStateValue();
  const removeHandler = (id) => dispatch(removeFavorites(id));

  return (
    <div className={classes.container__favorite}>
      <h1>Favorites</h1>
      <div className={classes.items__favorite}>
        {favorites.map(({ id, login, avatar_url }) => (
          <span key={id}>
            <h4>Username: {login}</h4>
            <img
              className={classes.img__favorite}
              src={avatar_url}
              alt="favorite user"
            />
            <button
              onClick={() => removeHandler(id)}
              className={classes.btn__favorite}
            >
              remove
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export { Favorites };
