import {
  ADMIN_CREATE_NEW_JOB,
  ADMIN_DELETE_ONE_JOB,
  ADMIN_UPDATE_ONE_JOB,
  GET_ADMIN_ALL_JOB,
  GET_ADMIN_ONE_JOB,
} from '../../Type';

const initalState = {
  adminAllJob: [],
  adminOneJob: [],
  adminAddJob: [],
  adminEditJob: [],
  adminRemoveJob: [],
};

const adminJobsReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_JOB:
      return { ...state, adminAllJob: action.payload };

    case GET_ADMIN_ONE_JOB:
      return { ...state, adminOneJob: action.payload };

    case ADMIN_CREATE_NEW_JOB:
      return { ...state, adminAddJob: action.payload };

    case ADMIN_UPDATE_ONE_JOB:
      return { ...state, adminEditJob: action.payload };

    case ADMIN_DELETE_ONE_JOB:
      return { ...state, adminRemoveJob: action.payload };

    default:
      return state;
  }
};

export default adminJobsReducer;
