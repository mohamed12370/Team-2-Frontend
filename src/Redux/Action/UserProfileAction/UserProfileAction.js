import { useUpdateDataWithImage } from '../../../ApiHook/UseUpdateData';
import { USER_EDIT_PROFILE } from '../../Type';

export const userEditProfile = (url) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateDataWithImage(url);
      dispatch({
        type: USER_EDIT_PROFILE,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user Edit Profile file redux `, err);
      dispatch({
        type: USER_EDIT_PROFILE,
        payload: err,
      });
    }
  };
};
