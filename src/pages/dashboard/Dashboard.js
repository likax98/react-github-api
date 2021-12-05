import React, { useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import APIENDPOINTS from 'config/apiEndopoints';
import { LOAD_MORE_AMOUNT } from 'utils/constants';
import { Loading, UserCard } from 'components';
import './dashboard.css';

function Dashboard() {
  const [loadMore, setLoadMore] = useState(LOAD_MORE_AMOUNT);
  const { data: users, isLoading, error } = useFetch(APIENDPOINTS.USERS);
  return (
    <div className="container__Dashboard">
      {isLoading && (
        <div className="loader">
          <Loading />
        </div>
      )}
      {error && <div>{error}</div>}
      {users && (
        <div>
          <h1 className="title__Dashboard">github Users</h1>
          <div className="userCard__Dashboard">
            {users
              ?.slice(0, loadMore)
              .map(({ id, login, avatar_url }) => (
                <UserCard
                  key={id}
                  image={avatar_url}
                  name={login}
                />
              ))}
          </div>
          <button
            hidden={loadMore >= users.length}
            onClick={() => setLoadMore((prev) => prev + LOAD_MORE_AMOUNT)}
            className="loadMore__Dashboard"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export { Dashboard };
