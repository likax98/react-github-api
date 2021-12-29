import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as classes from './userCard.module.css';

function UserCard({ image, name, followers, following }) {
  return (
    <Link to={`/users/${name}`}>
      <div className={classes.container__UserCard}>
        <img
          className={classes.img__UserCard}
          src={image}
          loading="lazy"
          alt="user"
        />
        <div className={classes.wrap}>
          <h1 className={classes.name__UserCard}>{name}</h1>
          <p>Followers: <br/> {followers}</p>
          <p>Following: <br/> {following}</p>
        </div>
      </div>
    </Link>
  );
}

UserCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number,
  following: PropTypes.number,
};

export { UserCard };
