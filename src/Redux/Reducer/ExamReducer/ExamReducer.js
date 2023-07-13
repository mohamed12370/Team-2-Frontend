import {
  CREATE_NEW_EXAM,
  DELETE_ONE_EXAM,
  GET_ALL_EXAM,
  GET_ONE_EXAM,
  UPDATE_NEW_EXAM,
} from '../../Type';

const inital = {
  addExam: [],
  editExam: [],
  allExam: [],
  oneExam: [],
  deleteExam: [],
};

const examReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_EXAM:
      return {
        ...state,
        addExam: action.payload,
      };

    case UPDATE_NEW_EXAM:
      return {
        ...state,
        editExam: action.payload,
      };

    case GET_ALL_EXAM:
      return {
        ...state,
        allExam: action.payload,
      };

    case GET_ONE_EXAM:
      return {
        ...state,
        oneExam: action.payload,
      };

    case DELETE_ONE_EXAM:
      return {
        ...state,
        deleteExam: action.payload,
      };

    default:
      return state;
  }
};

export default examReducer;
