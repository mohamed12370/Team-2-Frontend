import {
  ADMIN_CREATE_NEW_USER,
  ADMIN_DELETE_ONE_USER,
  ADMIN_UPDATE_ONE_USER,
  GET_ADMIN_ALL_USER,
  GET_ADMIN_ONE_USER,
} from '../../Type';

const initalState = {
  adminAllUser: [],
  adminOneUser: [],
  adminAddUser: [],
  adminEditUser: [],
  adminRemoveUser: [],
};

const adminUserReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_USER:
      return { ...state, adminAllUser: action.payload };

    case GET_ADMIN_ONE_USER:
      return { ...state, adminOneUser: action.payload };

    case ADMIN_CREATE_NEW_USER:
      return { ...state, adminAddUser: action.payload };

    case ADMIN_UPDATE_ONE_USER:
      return { ...state, adminEditUser: action.payload };

    case ADMIN_DELETE_ONE_USER:
      return { ...state, adminRemoveUser: action.payload };

    default:
      return state;
  }
};

export default adminUserReducer;
