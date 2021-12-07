const ACTIONS = {
  SET_USERS: 'SET_USER',
  SET_USERS_LOADING: 'SET_USERS_LOADING',
  SET_USERS_ERROR: 'SET_USERS_ERROR',
  SET_USER: 'SET_USER',
  SET_USER_LOADING: 'SET_USER_LOADING',
  SET_USER_ERROR: 'SET_USER_ERROR',
  SET_USER_REPOS: 'SET_USER_REPOS',
  SET_USER_REPOS_LOADING: 'SET_USER_REPOS_LOADING',
  SET_USER_REPOS_ERROR: 'SET_USER_REPOS_ERROR',
  SET_SEARCHED_USER: 'SET_SEARCHED_USER',
  SET_SEARCHED_USER_LOADING: 'SET_SEARCHED_USER_LOADING',
  SET_SEARCHED_USER_ERROR: 'SET_SEARCHED_USER_LOADING',
  SET_FAVORITES: 'SET_FAV',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAV',
};

// USERS

function setUsers(data) {
  console.log(data)
  return {
    type: ACTIONS.SET_USERS,
    payload: data,
  };
}

function setUsersLoading(data) {
  return {
    type: ACTIONS.SET_USERS_LOADING,
    payload: data,
  };
}

function setUsersError(data) {
  return {
    type: ACTIONS.SET_USERS_ERROR,
    payload: data,
  };
}

// USER
function setUser() {
  return {
    type: ACTIONS.SET_USER,
  };
}

function setUserLoading(data) {
  return {
    type: ACTIONS.SET_USER_LOADING,
    payload: data,
  };
}

function setUserError(data) {
  return {
    type: ACTIONS.SET_USER_ERROR,
    payload: data,
  };
}

// USER REPOS

function setUserRepos(data) {
  return {
    type: ACTIONS.SET_USER_REPOS,
    payload: data,
  };
}

function setUserReposLoading(data) {
  return {
    type: ACTIONS.SET_USER_REPOS_LOADING,
    payload: data,
  };
}

function setUserReposError(data) {
  return {
    type: ACTIONS.SET_USER_REPOS_USER_ERROR,
    payload: data,
  };
}

// SEARCHED USER

function setSearchedUser(data) {
  return {
    type: ACTIONS.SET_SEARCHED_USER,
    payload: data,
  };
}

function setSearchedLoading(data) {
  return {
    type: ACTIONS.SET_SEARCHED_USER_LOADING,
    payload: data,
  };
}

function setSearchedError(data) {
  return {
    type: ACTIONS.SET_SEARCHED_USER_ERROR,
    payload: data,
  };
}

// FAVORITES

function setFavorites(data) {
  return {
    type: ACTIONS.SET_FAVORITES,
    payload: data,
  };
}

function removeFavorites(data) {
  return {
    type: ACTIONS.REMOVE_FROM_FAVORITES,
    payload: data,
  };
}

export {
  setUsers,
  setUsersLoading,
  setUsersError,
  setUserLoading,
  setUserError,
  setUserRepos,
  setUserReposLoading,
  setUserReposError,
  setSearchedUser,
  setSearchedLoading,
  setSearchedError,
  setUser,
  setFavorites,
  removeFavorites,
};
export default ACTIONS;
