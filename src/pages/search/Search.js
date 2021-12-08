import { useState, useEffect } from 'react';
import { Loading, UserCard } from '../../components';
import {
  setSearchedUser,
  setSearchedLoading,
  setSearchedError,
  removeSearchedUser,
} from '../../context/actions';
import { createEffect } from '../../context/effects';
import { useStateValue } from '../../context/StateProvider';
import { fetchData } from '../../http';
import * as classes from './search.module.css';

function Search() {
  const [username, setUsername] = useState('');
  // ერთიდაიგივე დასერჩილზე 2ჯერ რო არ შვრას
  const [submit, isSubmitted] = useState(false);

  const [
    {
      searchedUser: { loading, data, error },
    },
    dispatch,
  ] = useStateValue();

  const onChangeHandler = ({ target: { value } }) => {
    setUsername(value.trim());
    isSubmitted(false);
  };

  useEffect(() => {
    dispatch(removeSearchedUser());
  }, []);

  function getSearchedUser() {
    const url = `users/${username}`;
    createEffect(
      dispatch,
      fetchData.bind(this, url, 'Sorry, user does not exist!'),
      setSearchedLoading,
      setSearchedUser,
      setSearchedError
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    if (submit) return;
    if (data) {
      dispatch(removeSearchedUser());
    }
    getSearchedUser();
    isSubmitted(true);
  }

  return (
    <>
      <div className={classes.container__search}>
        <div className={classes.input__search}>
          <input
            className={classes.prompt__search}
            placeholder="search username here..."
            type="text"
            value={username}
            onChange={onChangeHandler}
          />
        </div>

        <button
          className={classes.btn__search}
          type="submit"
          disabled={!username}
          onClick={submitHandler}
        >
          Search
        </button>
        {loading && (
          <div className="loader">
            <Loading />
          </div>
        )}
        {error && <p className="error">{error}</p>}
        {data && (
          <UserCard
            image={data?.avatar_url}
            name={data?.login}
            followers={data?.followers}
            following={data?.following}
          />
        )}
      </div>
    </>
  );
}

export { Search };
