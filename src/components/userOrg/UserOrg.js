import PropTypes from "prop-types";
import { useFetch } from 'hooks/useFetch';
import APIENDPOINTS from 'config/apiEndopoints';

function UserOrg({ name, avatar_url }) {
  const { data: OrgDetails } = useFetch(`${APIENDPOINTS.ORGS}/${name}`);

  return (
    <div>
      <a href={OrgDetails?.html_url} target="_blank" rel="noreferrer">
        <img src={avatar_url} alt="organization" width="200" height="200" />
      </a>
    </div>
  );
}

UserOrg.propTypes = {
  name: PropTypes.string,
  avatar_url: PropTypes.string,
};

export { UserOrg };
