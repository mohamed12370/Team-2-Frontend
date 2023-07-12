import { GET_USER_ALL_JOB, GET_USER_ONE_JOB } from '../../Type';

const initalState = {
  userAllJob: [],
  userOneJob: [],
};

const userJobsReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_ALL_JOB:
      return { ...state, userAllJob: action.payload };

    case GET_USER_ONE_JOB:
      return { ...state, userOneJob: action.payload };

    default:
      return state;
  }
};

export default userJobsReducer;
