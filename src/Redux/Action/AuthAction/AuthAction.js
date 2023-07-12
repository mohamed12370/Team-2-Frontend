import { useCreateData } from '../../../ApiHook/UseCreateData';
import { USER_LOGIN, USER_SINGUP } from '../../Type';

export const userLogin = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateData(url, data);
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user login file redux `, err);
      dispatch({
        type: USER_LOGIN,
        payload: err,
      });
    }
  };
};

export const userSingup = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateData(url, data);
      dispatch({
        type: USER_SINGUP,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user Singup file redux `, err);
      dispatch({
        type: USER_SINGUP,
        payload: err,
      });
    }
  };
};
