import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import {
  ADMIN_CREATE_NEW_COURSE,
  ADMIN_DELETE_ONE_COURSE,
  ADMIN_UPDATE_ONE_COURSE,
  GET_ADMIN_ALL_COURSE,
  GET_ADMIN_ONE_COURSE,
} from '../../Type';

export const getAdminAllCourses = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ALL_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get all Courses file redux `, err);
      dispatch({
        type: GET_ADMIN_ALL_COURSE,
        payload: err,
      });
    }
  };
};

export const getAdminOneCourses = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ONE_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get one Courses file redux `, err);
      dispatch({
        type: GET_ADMIN_ONE_COURSE,
        payload: err,
      });
    }
  };
};

export const adminCreateNewCourses = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: ADMIN_CREATE_NEW_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin create new Courses file redux `, err);
      dispatch({
        type: ADMIN_CREATE_NEW_COURSE,
        payload: err,
      });
    }
  };
};

export const adminUpdateOneCourses = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url, data);
      dispatch({
        type: ADMIN_UPDATE_ONE_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin update one Courses file redux `, err);
      dispatch({
        type: ADMIN_UPDATE_ONE_COURSE,
        payload: err,
      });
    }
  };
};

export const adminDeleteOneCourses = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: ADMIN_DELETE_ONE_COURSE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin delete one Courses file redux `, err);
      dispatch({
        type: ADMIN_DELETE_ONE_COURSE,
        payload: err,
      });
    }
  };
};
