import { useState, useEffect } from 'react';
import { LOAD_MORE_AMOUNT, USER_MAX_FOLLOWERS } from '../../utils/constants';
import { Loading, UserCard } from '../../components';
import { useStateValue } from '../../context/StateProvider';
import { createEffect } from '../../context/effects';
import { fetchData } from '../../http';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../context/actions';
import * as classes from './dashboard.module.css';

function Dashboard() {
  const [pageCount, setPageCount] = useState(1);
  const [userDetails, setUserDetails] = useState([]);
  const [
    {
      users: { loading, total_count, data, error },
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    let isMounted = true;
    const url = `search/users?q=followers:>=${USER_MAX_FOLLOWERS}&page=${pageCount}&per_page=${LOAD_MORE_AMOUNT}`;

    if (isMounted) {
      createEffect(
        dispatch,
        fetchData.bind(this, url),
        setUsersLoading,
        setUsers,
        setUsersError
      ).then((data) => {
        data?.items.map(({ login: name }) => {
          fetchData(`users/${name}`).then((user) =>
            setUserDetails((prev) => [...prev, user])
          );
        });
      });
    }
    return () => {
      isMounted = false;
    };
  }, [pageCount]);

  const loadMoreHandler =() => setPageCount((prev) => prev + 1);

  return (
    <div className={classes.container__Dashboard}>
      {loading && (
        <div className="loader">
          <Loading />
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h1 className={classes.title__Dashboard}>Github Users</h1>
          <div className={classes.userCard__Dashboard}>
            {data?.map(({ id, login, avatar_url }, i) => {
              const foundedUser = userDetails.find(
                ({ id: userId }) => id === userId
              );
              return (
                <UserCard
                  key={i}
                  image={avatar_url}
                  name={login}
                  followers={foundedUser?.followers}
                  following={foundedUser?.following}
                />
              );
            })}
          </div>
          <button
            onClick={loadMoreHandler}
            disabled={loading}
            hidden={data.length >= total_count}
            className={classes.loadMore__Dashboard}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export { Dashboard };
