import { useState, useEffect } from 'react';
import { LOAD_MORE_AMOUNT, USER_MAX_FOLLOWERS } from 'utils/constants';
import { Loading, UserCard } from 'components';
import { useStateValue } from 'context/StateProvider';
import { createEffect } from 'context/effects';
import { fetchData } from '../../http';
import { setUsers, setUsersError, setUsersLoading } from 'context/actions';
import * as classes from "./dashboard.module.css";

function Dashboard() {
  const [loadMore, setLoadMore] = useState(LOAD_MORE_AMOUNT);
  const [pageCount, setPageCount] = useState(1);
  const [userDetails, setUserDetails] = useState([]);
  const [
    {
      users: { loading, total_count, data, error },
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    // ეს არვიცი რამდენად ოქეია, წავიკითხე სულ უნდა გაწმინდოო და ფიდბექი მომწერე თუ შეძლებ
    let isMounted = true;
    const url = `search/users?q=followers:>=${USER_MAX_FOLLOWERS}&page=${pageCount}&per_page=${LOAD_MORE_AMOUNT}`;

    // იმ დისტ ფოლდერის მერე ეფექტში რაღაცეები მქონდა შეცვლილი და დაჟე მეც არ ველოდებოდი, კარგად მქონდა გატესტილი, არ მოაქვს აშკარად იგივე უზერები :)

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
  }, [loadMore]);

  function loadMoreHandler() {
    setLoadMore((prev) => prev + LOAD_MORE_AMOUNT);
    setPageCount((prev) => prev + 1);
  }

  return (
    <div className={classes.container__Dashboard}>
      {loading && (
        <div className="loader">
          <Loading />
        </div>
      )}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h1 className={classes.title__Dashboard}>github Users</h1>
          <div className={classes.userCard__Dashboard}>
            {data?.slice(0, loadMore).map(({ id, login, avatar_url }, i) => {
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
