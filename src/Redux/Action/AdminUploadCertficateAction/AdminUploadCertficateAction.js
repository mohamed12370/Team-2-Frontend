import { useCreateDataWithImage } from '../../../ApiHook/UseCreateData';
import { useDeleteData } from '../../../ApiHook/UseDeleteData';
import { useGetData } from '../../../ApiHook/UseGetData';
import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import {
  ADMIN_CREATE_NEW_CERTIFCATE,
  ADMIN_DELETE_ONE_CERTIFCATE,
  ADMIN_UPDATE_ONE_CERTIFCATE,
  GET_ADMIN_ALL_CERTIFCATE,
  GET_ADMIN_ONE_CERTIFCATE,
} from '../../Type';

export const getAdminAllCertficate = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ALL_CERTIFCATE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get all Certficate file redux `, err);
      dispatch({
        type: GET_ADMIN_ALL_CERTIFCATE,
        payload: err,
      });
    }
  };
};

export const getAdminOneCertficate = (url) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(url);
      dispatch({
        type: GET_ADMIN_ONE_CERTIFCATE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from admin get one Certficate file redux `, err);
      dispatch({
        type: GET_ADMIN_ONE_CERTIFCATE,
        payload: err,
      });
    }
  };
};

export const adminCreateNewCertficate = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useCreateDataWithImage(url, data);
      dispatch({
        type: ADMIN_CREATE_NEW_CERTIFCATE,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from admin create new Certficate file redux `,
        err
      );
      dispatch({
        type: ADMIN_CREATE_NEW_CERTIFCATE,
        payload: err,
      });
    }
  };
};

export const adminUpdateOneCertficate = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url, data);
      dispatch({
        type: ADMIN_UPDATE_ONE_CERTIFCATE,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from admin update one Certficate file redux `,
        err
      );
      dispatch({
        type: ADMIN_UPDATE_ONE_CERTIFCATE,
        payload: err,
      });
    }
  };
};

export const adminDeleteOneCertficate = (url, data) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(url);
      dispatch({
        type: ADMIN_DELETE_ONE_CERTIFCATE,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from admin delete one Certficate file redux `,
        err
      );
      dispatch({
        type: ADMIN_DELETE_ONE_CERTIFCATE,
        payload: err,
      });
    }
  };
};
