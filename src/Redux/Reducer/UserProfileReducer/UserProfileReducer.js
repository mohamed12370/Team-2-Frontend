import { USER_EDIT_PROFILE } from '../../Type';

const initalState = {
  userEditProfile: [],
};

const userProfileReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_EDIT_PROFILE:
      return { ...state, userEditProfile: action.payload };

    default:
      return state;
  }
};

export default userProfileReducer;
