import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './userCard.css';

function UserCard({ image, name, followers, following }) {
  return (
    <Link to={`/users/${name}`}>
      <div className="container__UserCard">
        <h1 className="name__UserCard">{name}</h1>
        <img className="img__UserCard" src={image} loading="lazy" alt="user" />
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
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
