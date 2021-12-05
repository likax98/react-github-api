import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { Loading, UserRepo, UserOrg } from '../../components';
import APIENDPOINTS from 'config/apiEndopoints';
import { USER_REPOS_MAX_AMOUNT, USER_ORGS_MAX_AMOUNT } from 'utils/constants';
import { useStateValue } from 'context/StateProvider';
import { removeFav, setFav } from 'context/actions';
import './user.css';

function User() {
  const [{ fav }, dispatch] = useStateValue();
  const { username } = useParams();
  const userUrl = `${APIENDPOINTS.USERS}/${username}`;
  const { data: userDetail, isLoading, error } = useFetch(userUrl);
  // ამეების ლოადერზე ვიფიქრე მარა მგონი გადარტვირთავს ძალიან
  const { data: repos } = useFetch(`${userUrl}/repos`);
  const { data: orgs } = useFetch(`${userUrl}/orgs`);

  const userIsFavorite = (userId) => fav.find(({ id }) => id === userId);

  function favHandler(userId) {
    if (userIsFavorite(userId)) {
      dispatch(removeFav(userDetail));
    } else {
      dispatch(setFav(userDetail));
    }
  }

  return (
    <>
      <div className="container__user">
        {isLoading && (
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
              {repos && (
                <>
                  <h1>Repos</h1>
                  <div className="repos__user">
                    {repos
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
