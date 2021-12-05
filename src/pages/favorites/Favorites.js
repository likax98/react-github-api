import React from 'react';
import { useStateValue } from 'context/StateProvider';
import { removeFav } from 'context/actions';
import './favorites.css';

function Favorites() {
  const [{ fav }, dispatch] = useStateValue();
  const removeHandler = (id) => dispatch(removeFav(id));

  return (
    <div className="container__favorite">
      <h1>Favorites</h1>
      <div className="items__favorite">
        {fav.map(({id , login, avatar_url }) => (
          <span key={id}>
            <h4>{login}</h4>
            <img
              className="img__favorite"
              src={avatar_url}
              alt="favorite user"
            />
            <button onClick={() => removeHandler(id)} className="btn__favorite">
              remove
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export { Favorites };
