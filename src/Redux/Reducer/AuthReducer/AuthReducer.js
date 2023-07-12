import { USER_LOGIN, USER_SINGUP } from '../../Type';

const initalState = {
  userLogin: [],
  userSingup: [],
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userLogin: action.payload };

    case USER_SINGUP:
      return { ...state, userSingup: action.payload };

    default:
      return state;
  }
};

export default authReducer;
