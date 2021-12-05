import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from 'hooks/useFetch';
import APIENDPOINTS from 'config/apiEndopoints';

import './userCard.css';

function UserCard({ image, name }) {
  const userUrl = `${APIENDPOINTS.USERS}/${name}`;
  const { data: userDetail } = useFetch(userUrl);
  const { data: repos } = useFetch(`${userUrl}/repos`);

  return (
    <Link to={`/users/${name}`}>
      <div className="container__UserCard">
        <h1 className="name__UserCard">{name}</h1>
        <img className="img__UserCard" src={image} loading="lazy" alt="user" />
        <p>Repositories: {repos?.length}</p>
        <p>Followers: {userDetail?.followers}</p>
        <p>Following: {userDetail?.following}</p>
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