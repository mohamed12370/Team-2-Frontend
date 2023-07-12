import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import {
  ADMIN_CREATE_NEW_JOB,
  ADMIN_DELETE_ONE_JOB,
  ADMIN_UPDATE_ONE_JOB,
  GET_ADMIN_ALL_JOB,
  GET_ADMIN_ONE_JOB,
} from '../../Type';

export const getAdminAllJob = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ALL_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get all Job file redux `, err);
      dispatch({
        type: GET_ADMIN_ALL_JOB,
        payload: err,
      });
    }
  };
};

export const getAdminOneJob = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ONE_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get one Job file redux `, err);
      dispatch({
        type: GET_ADMIN_ONE_JOB,
        payload: err,
      });
    }
  };
};

export const adminCreateNewJob = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: ADMIN_CREATE_NEW_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin create new Job file redux `, err);
      dispatch({
        type: ADMIN_CREATE_NEW_JOB,
        payload: err,
      });
    }
  };
};

export const adminUpdateOneJob = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url, data);
      dispatch({
        type: ADMIN_UPDATE_ONE_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin update one Job file redux `, err);
      dispatch({
        type: ADMIN_UPDATE_ONE_JOB,
        payload: err,
      });
    }
  };
};

export const adminDeleteOneJob = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: ADMIN_DELETE_ONE_JOB,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin delete one Job file redux `, err);
      dispatch({
        type: ADMIN_DELETE_ONE_JOB,
        payload: err,
      });
    }
  };
};
