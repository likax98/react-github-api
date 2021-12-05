const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_FAV: 'SET_FAV',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
};

function setUser(data) {
  return {
    type: ACTIONS.SET_USER,
    payload: data,
  };
}

function setFav(data) {
  return {
    type: ACTIONS.SET_FAV,
    payload: data,
  };
}

function removeFav(data) {
  return {
    type: ACTIONS.REMOVE_FROM_FAV,
    payload: data,
  };
}

export { setUser, setFav, removeFav };
export default ACTIONS;
