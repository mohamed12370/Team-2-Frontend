import { useGetData } from '../../../ApiHook/UseGetData';
import { GET_USER_ALL_JOB, GET_USER_ONE_JOB } from '../../Type';

export const getUserAllJob = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ALL_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get all Job file redux `, err);
      dispatch({
        type: GET_USER_ALL_JOB,
        payload: err,
      });
    }
  };
};

export const getUserOneJob = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ONE_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get one Job file redux `, err);
      dispatch({
        type: GET_USER_ONE_JOB,
        payload: err,
      });
    }
  };
};
