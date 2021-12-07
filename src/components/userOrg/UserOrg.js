import { useState, useEffect } from 'react';
import { fetchData } from '../../http';
import PropTypes from 'prop-types';

function UserOrg({ name, avatar_url }) {
  const [OrgDetails, setOrgDetails] = useState('');

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData(`orgs/${name}`).then((org) => setOrgDetails(org));
    }
    return () => {
      isMounted = false;
    };
  }, []);

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
