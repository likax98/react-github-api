import actions from './actions';

export const initialState = {
  loading: false,
  user: null,
  fav: [],
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.SET_FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };

    case actions.REMOVE_FROM_FAV:
      const newFavs = state.fav.filter(({ id }) => id === action.payload);
      return {
        ...state,
        fav: newFavs,
      };

    default:
      return state;
  }
};

export default reducer;
