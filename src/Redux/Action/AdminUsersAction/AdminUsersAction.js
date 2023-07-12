import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import {
  ADMIN_CREATE_NEW_USER,
  ADMIN_DELETE_ONE_USER,
  ADMIN_UPDATE_ONE_USER,
  GET_ADMIN_ALL_USER,
  GET_ADMIN_ONE_USER,
} from '../../Type';

export const getAdminAllUser = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ALL_USER,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get all User file redux `, err);
      dispatch({
        type: GET_ADMIN_ALL_USER,
        payload: err,
      });
    }
  };
};

export const getAdminOneUser = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ONE_USER,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get one User file redux `, err);
      dispatch({
        type: GET_ADMIN_ONE_USER,
        payload: err,
      });
    }
  };
};

export const adminCreateNewUser = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: ADMIN_CREATE_NEW_USER,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin create new User file redux `, err);
      dispatch({
        type: ADMIN_CREATE_NEW_USER,
        payload: err,
      });
    }
  };
};

export const adminUpdateOneUser = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url, data);
      dispatch({
        type: ADMIN_UPDATE_ONE_USER,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin update one User file redux `, err);
      dispatch({
        type: ADMIN_UPDATE_ONE_USER,
        payload: err,
      });
    }
  };
};

export const adminDeleteOneUser = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: ADMIN_DELETE_ONE_USER,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin delete one User file redux `, err);
      dispatch({
        type: ADMIN_DELETE_ONE_USER,
        payload: err,
      });
    }
  };
};
