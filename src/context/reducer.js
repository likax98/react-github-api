import actions from './actions';

export const initialState = {
  users: {
    loading: false,
    data: [],
    total_count: 0,
    error: '',
  },
  user: {
    loading: false,
    isLogged: false,
    error: '',
    repos: {
      loading: false,
      data: [],
      error: '',
    },
    orgs: [],
  },
  searchedUser: {
    loading: false,
    data: null,
    error: '',
  },
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // USERS
    case actions.SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          data: [...state.users.data, ...action.payload.items],
          total_count: action.payload.total_count,
          loading: false,
        },
      };
    case actions.SET_USERS_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    case actions.SET_USERS_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
        },
      };

    // USER
    case actions.SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          loading: false,
        },
      };
    case actions.SET_USER_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case actions.SET_USER_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          error: action.payload,
          loading: false,
        },
      };

    // USER REPOS
    case actions.SET_USER_REPOS:
      return {
        ...state,
        user: {
          ...state.user,
          repos: {
            ...state.user.repos,
            data: action.payload,
            loading: false,
          },
        },
      };
    case actions.SET_USER_REPOS_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          repos: {
            ...state.user.repos,
            loading: true,
          },
        },
      };
    case actions.SET_USER_REPOS_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          repos: {
            ...state.user.repos,
            error: action.payload,
            loading: false,
          },
        },
      };

    // USER ORGS
    case actions.SET_USER_ORGS:
      return {
        ...state,
        user: {
          ...state.user,
          orgs: action.payload,
        },
      };

    // SEARCHED USER
    case actions.SET_SEARCHED_USER:
      return {
        ...state,
        searchedUser: {
          ...state.searchedUser,
          data: action.payload,
          loading: false,
        },
      };
    case actions.SET_SEARCHED_USER_LOADING:
      return {
        ...state,
        searchedUser: {
          ...state.searchedUser,
          loading: false,
        },
      };
    case actions.SET_SEARCHED_USER_ERROR:
      return {
        ...state,
        searchedUser: {
          ...state.searchedUser,
          error: action.payload,
          loading: false,
        },
      };

    //Favorites
    case actions.SET_FAVORITES:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };

    case actions.REMOVE_FROM_FAVORITES:
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
