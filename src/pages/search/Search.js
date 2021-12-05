import React, { useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import APIENDPOINTS from 'config/apiEndopoints';
import { Loading, UserCard } from 'components';
import './search.css';

function Search() {
  const [username, setUsername] = useState('');
  const [url, setUrl] = useState('');
  const {
    data: searchedUser,
    isLoading,
    error,
    setData,
    setError,
  } = useFetch(url);

  const onChangeHandler = ({ target: { value } }) => setUsername(value.trim());

  function submitHandler(e) {
    e.preventDefault();
    setData(null);
    setError(null);
    setUrl(`${APIENDPOINTS.USERS}/${username}`);
  }

  return (
    <>
      <div className="container__search">
        <div className="input__search">
          <input
            className="prompt__search"
            placeholder="search username here..."
            type="text"
            value={username}
            onChange={onChangeHandler}
          />
        </div>

        <button
          className="btn__search"
          type="submit"
          disabled={!username}
          onClick={submitHandler}
        >
          Search
        </button>
        {isLoading && (
          <div className="loader">
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}
        {searchedUser && (
          <UserCard image={searchedUser?.avatar_url} name={username} />
        )}
      </div>
    </>
  );
}

export { Search };
