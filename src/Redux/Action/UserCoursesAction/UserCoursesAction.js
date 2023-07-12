import { useGetData } from '../../../ApiHook/UseGetData';
import { GET_USER_ALL_COURSE, GET_USER_ONE_COURSE } from '../../Type';

export const getUserAllCourse = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ALL_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get all Course file redux `, err);
      dispatch({
        type: GET_USER_ALL_COURSE,
        payload: err,
      });
    }
  };
};

export const getUserOneCourse = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ONE_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get one Course file redux `, err);
      dispatch({
        type: GET_USER_ONE_COURSE,
        payload: err,
      });
    }
  };
};
