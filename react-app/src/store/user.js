const SAVE_USER = 'user/SAVE_USER';
const LOGOUT_USER = 'user/LOGOUT_USER';
const ADD_FOLLOWED = 'user/ADD_FOLLOWED';
const REMOVE_FOLLOWED = 'user/REMOVE_FOLLOWED';

const save_user = (user) => ({
  type: SAVE_USER,
  user,
});

const logout_user = () => ({
  type: LOGOUT_USER,
});

export const add_followed = (username) => ({
  type: ADD_FOLLOWED,
  username,
});

export const remove_followed = (username) => ({
  type: REMOVE_FOLLOWED,
  username,
});

export const saveUser = (user) => async (dispatch) => {
  await dispatch(save_user(user));
  return;
};

export const logoutUser = () => async (dispatch) => {
  await dispatch(logout_user());
  return;
};

const initialState = {};

const userReducer = (state = null, action) => {
  let newState;
  switch (action.type) {
    case SAVE_USER: {
      newState = Object.assign({}, state);
      newState = action.user;
      return newState;
    }
    case ADD_FOLLOWED: {
      newState = Object.assign({}, state);
      newState.followed.push(action.username);
      return newState;
    }
    case REMOVE_FOLLOWED: {
      newState = Object.assign({}, state);
      newState.followed = newState.followed.filter((el) => el !== action.username);
      return newState;
    }
    case LOGOUT_USER: {
      newState = initialState;
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
