import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import {
  ADMIN_CREATE_NEW_ARTICLE,
  ADMIN_DELETE_ONE_ARTICLE,
  ADMIN_UPDATE_ONE_ARTICLE,
  GET_ADMIN_ALL_ARTICLE,
  GET_ADMIN_ONE_ARTICLE,
} from '../../Type';

export const getAdminAllArticle = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ALL_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get all article file redux `, err);
      dispatch({
        type: GET_ADMIN_ALL_ARTICLE,
        payload: err,
      });
    }
  };
};

export const getAdminOneArticle = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ONE_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get one article file redux `, err);
      dispatch({
        type: GET_ADMIN_ONE_ARTICLE,
        payload: err,
      });
    }
  };
};

export const adminCreateNewArticle = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: ADMIN_CREATE_NEW_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin create new article file redux `, err);
      dispatch({
        type: ADMIN_CREATE_NEW_ARTICLE,
        payload: err,
      });
    }
  };
};

export const adminUpdateOneArticle = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url, data);
      dispatch({
        type: ADMIN_UPDATE_ONE_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin update one article file redux `, err);
      dispatch({
        type: ADMIN_UPDATE_ONE_ARTICLE,
        payload: err,
      });
    }
  };
};

export const adminDeleteOneArticle = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: ADMIN_DELETE_ONE_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin delete one article file redux `, err);
      dispatch({
        type: ADMIN_DELETE_ONE_ARTICLE,
        payload: err,
      });
    }
  };
};
