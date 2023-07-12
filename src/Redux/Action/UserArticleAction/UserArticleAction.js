import { useGetData } from '../../../ApiHook/UseGetData';
import { GET_USER_ALL_ARTICLE, GET_USER_ONE_ARTICLE } from '../../Type';

export const getUserAllArticle = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ALL_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get all article file redux `, err);
      dispatch({
        type: GET_USER_ALL_ARTICLE,
        payload: err,
      });
    }
  };
};

export const getUserOneArticle = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_USER_ONE_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from User get one article file redux `, err);
      dispatch({
        type: GET_USER_ONE_ARTICLE,
        payload: err,
      });
    }
  };
};
