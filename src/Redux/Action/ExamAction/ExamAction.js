import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import {
  CREATE_NEW_EXAM,
  DELETE_ONE_EXAM,
  GET_ALL_EXAM,
  GET_ONE_EXAM,
  UPDATE_NEW_EXAM,
} from '../../Type';

export const createNewExam = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: CREATE_NEW_EXAM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from create new exam redux file `, err);
      dispatch({
        type: CREATE_NEW_EXAM,
        payload: err,
      });
    }
  };
};

export const updateOnwExam = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: UPDATE_NEW_EXAM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from update new exam redux file `, err);
      dispatch({
        type: UPDATE_NEW_EXAM,
        payload: err,
      });
    }
  };
};

export const getAllExam = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ALL_EXAM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from get all exam redux file `, err);
      dispatch({
        type: GET_ALL_EXAM,
        payload: err,
      });
    }
  };
};

export const getOneExam = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ONE_EXAM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from get one exam redux file `, err);
      dispatch({
        type: GET_ONE_EXAM,
        payload: err,
      });
    }
  };
};

export const removeOneExam = (url) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: DELETE_ONE_EXAM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from delete one exam redux file `, err);
      dispatch({
        type: DELETE_ONE_EXAM,
        payload: err,
      });
    }
  };
};
