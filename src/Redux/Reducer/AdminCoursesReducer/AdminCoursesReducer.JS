import {
  ADMIN_CREATE_NEW_COURSE,
  ADMIN_DELETE_ONE_COURSE,
  ADMIN_UPDATE_ONE_COURSE,
  GET_ADMIN_ALL_COURSE,
  GET_ADMIN_ONE_COURSE,
} from '../../Type';

const initalState = {
  adminAllCourse: [],
  adminOneCourse: [],
  adminAddCourse: [],
  adminEditCourse: [],
  adminRemoveCourse: [],
};

const adminCoursesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_COURSE:
      return { ...state, adminAllCourse: action.payload };

    case GET_ADMIN_ONE_COURSE:
      return { ...state, adminOneCourse: action.payload };

    case ADMIN_CREATE_NEW_COURSE:
      return { ...state, adminAddCourse: action.payload };

    case ADMIN_UPDATE_ONE_COURSE:
      return { ...state, adminEditCourse: action.payload };

    case ADMIN_DELETE_ONE_COURSE:
      return { ...state, adminRemoveCourse: action.payload };

    default:
      return state;
  }
};

export default adminCoursesReducer;
