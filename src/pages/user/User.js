import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, UserRepo, UserOrg } from '../../components';
import { useStateValue } from 'context/StateProvider';
import { createEffect } from 'context/effects';
import {
  setUser,
  setUserLoading,
  setUserError,
  setUserRepos,
  setUserReposLoading,
  setUserReposError,
  setUserOrgs,
  removeFavorites,
  setFavorites,
} from 'context/actions';
import { USER_REPOS_MAX_AMOUNT, USER_ORGS_MAX_AMOUNT } from 'utils/constants';
import { fetchData } from '../../http';
import './user.css';

function User() {
  const { username } = useParams();
  const [
    {
     user, user: {
        loading,
        repos: { data: reposData, loading: reposLoading, error: reposError },
        data: userDetail,
        orgs,
        error,
      },
      favorites,
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getUser();
      getUserRepos();
      getUserOrgs();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  function getUser() {
    const url = `users/${username}`;
    createEffect(
      dispatch,
      fetchData.bind(this, url),
      setUserLoading,
      setUser,
      setUserError
    );
  }

  function getUserRepos() {
    const url = `users/${username}/repos`;
    createEffect(
      dispatch,
      fetchData.bind(this, url),
      setUserReposLoading,
      setUserRepos,
      setUserReposError
    );
  }

  function getUserOrgs() {
    // აი ამაზეც ლოადერი უკვე ძაან აზელდა :დ
    const url = `users/${username}/orgs`;
    createEffect(dispatch, fetchData.bind(this, url), undefined, setUserOrgs);
  }

  const userIsFavorite = (userId) => favorites.find(({ id }) => id === userId);

  function favHandler(userId) {
    if (userIsFavorite(userId)) {
      dispatch(removeFavorites(userDetail));
    } else {
      dispatch(setFavorites(userDetail));
    }
  }

  return (
    <>
      <div className="container__user">
        {loading && (
          <div className="loader">
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}
        {userDetail && (
          <>
            <div className="left__user">
              <img
                className="img__user"
                src={userDetail?.avatar_url}
                alt="user"
              />
              <p
                onClick={() => favHandler(userDetail?.id)}
                className={
                  ('fav__user',
                  userIsFavorite(userDetail?.id)
                    ? 'is-fav-user'
                    : 'is-not-fav-user')
                }
              >
                Add to favorite ⭐
              </p>
              {userDetail.bio && <div>Bio: {userDetail?.bio}</div>}
              <p>Followers: {userDetail?.followers}</p>
              <p>Following: {userDetail?.following}</p>
              <div className="orgs">
                {orgs
                  ?.slice(0, USER_ORGS_MAX_AMOUNT)
                  .map(({ id, login: name, avatar_url }) => (
                    <UserOrg key={id} name={name} avatar_url={avatar_url} />
                  ))}
              </div>
            </div>
            <div className="right__user">
              {reposLoading && (
                <div className="loader">
                  <Loading />
                </div>
              )}
              {reposError && <div>{error}</div>}
              {reposData && (
                <>
                  <h1>Repos</h1>
                  <div className="repos__user">
                    {reposData
                      ?.slice(0, USER_REPOS_MAX_AMOUNT)
                      .map(({ id, name, html_url, forks }) => (
                        <UserRepo
                          key={id}
                          name={name}
                          url={html_url}
                          forks={forks}
                        />
                      ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export { User };
