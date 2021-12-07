const ACTIONS = {
  SET_USERS: 'SET_USERS',
  SET_USERS_LOADING: 'SET_USERS_LOADING',
  SET_USERS_ERROR: 'SET_USERS_ERROR',
  SET_USER: 'SET_USER',
  SET_USER_LOADING: 'SET_USER_LOADING',
  SET_USER_ERROR: 'SET_USER_ERROR',
  SET_USER_REPOS: 'SET_USER_REPOS',
  SET_USER_REPOS_LOADING: 'SET_USER_REPOS_LOADING',
  SET_USER_REPOS_ERROR: 'SET_USER_REPOS_ERROR',
  SET_USER_ORGS: 'SET_USER_ORGS',
  SET_SEARCHED_USER: 'SET_SEARCHED_USER',
  SET_SEARCHED_USER_LOADING: 'SET_SEARCHED_USER_LOADING',
  SET_SEARCHED_USER_ERROR: 'SET_SEARCHED_USER_LOADING',
  REMOVE_SEARCHED_USER: 'REMOVE_SEARCHED_USER',
  SET_LOGGED_USER: 'SET_LOGGED_USER',
  SET_LOGGED_USER_LOADING: 'SET_LOGGED_USER_LOADING',
  SET_LOGGED_USER_ERROR: 'SET_LOGGED_USER_ERROR',
  REMOVE_LOGGED_USER: "REMOVE_LOGGED_USER",
  SET_FAVORITES: 'SET_FAV',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAV',
};

// USERS
function setUsers(data) {
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
function setUser(data) {
  return {
    type: ACTIONS.SET_USER,
    payload: data,
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

// USER REPOS
function setUserOrgs(data) {
  return {
    type: ACTIONS.SET_USER_ORGS,
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

function removeSearchedUser() {
  return {
    type: ACTIONS.REMOVE_SEARCHED_USER,
  };
}

// LOGGED USER
function setLoggedUser(data) {
  return {
    type: ACTIONS.SET_LOGGED_USER,
    payload: data,
  };
}

function setLoggedUserLoading(data) {
  return {
    type: ACTIONS.SET_LOGGED_USER_LOADING,
    payload: data,
  };
}

function setLoggedUserError(data) {
  return {
    type: ACTIONS.SET_LOGGED_USER_ERROR,
    payload: data,
  };
}

function removeLoggedUser() {
  return {
    type: ACTIONS.REMOVE_LOGGED_USER,
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
  setUser,
  setUserLoading,
  setUserError,
  setUserRepos,
  setUserReposLoading,
  setUserReposError,
  setUserOrgs,
  setSearchedUser,
  setSearchedLoading,
  setSearchedError,
  removeSearchedUser,
  setLoggedUser,
  setLoggedUserLoading,
  setLoggedUserError,
  removeLoggedUser,
  setFavorites,
  removeFavorites,
};

export default ACTIONS;
