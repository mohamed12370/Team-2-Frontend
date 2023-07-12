import { GET_USER_ALL_COURSE, GET_USER_ONE_COURSE } from '../../Type';

const initalState = {
  userAllCourse: [],
  userOneCourse: [],
};

const userCoursesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_ALL_COURSE:
      return { ...state, userAllCourse: action.payload };

    case GET_USER_ONE_COURSE:
      return { ...state, userOneCourse: action.payload };

    default:
      return state;
  }
};

export default userCoursesReducer;
