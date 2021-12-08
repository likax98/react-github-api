import PropTypes from 'prop-types';
import * as classes from './userRepo.module.css';
function UserRepo({ name, url, forks }) {
  return (
    <div className={classes.repo__container}>
      <a href={url} alt={name} target="_blank" rel="noreferrer">
        <h2>{name}</h2>

        <div className={classes.repo__footer}>
          {/* ადგილის შესავსებად */}
          <p className={classes.repo__Items}>Forks: {forks}</p>
        </div>
      </a>
    </div>
  );
}

UserRepo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  forks: PropTypes.number.isRequired,
};

export { UserRepo };
