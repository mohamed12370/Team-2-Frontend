import {
  ADMIN_CREATE_NEW_CERTIFCATE,
  ADMIN_DELETE_ONE_CERTIFCATE,
  ADMIN_UPDATE_ONE_CERTIFCATE,
  GET_ADMIN_ALL_CERTIFCATE,
  GET_ADMIN_ONE_CERTIFCATE,
} from '../../Type';

const initalState = {
  adminAllCertifcate: [],
  adminOneCertifcate: [],
  adminAddCertifcate: [],
  adminEditCertifcate: [],
  adminRemoveCertifcate: [],
};

const adminCertifcateReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_CERTIFCATE:
      return { ...state, adminAllCertifcate: action.payload };

    case GET_ADMIN_ONE_CERTIFCATE:
      return { ...state, adminOneCertifcate: action.payload };

    case ADMIN_CREATE_NEW_CERTIFCATE:
      return { ...state, adminAddCertifcate: action.payload };

    case ADMIN_UPDATE_ONE_CERTIFCATE:
      return { ...state, adminEditCertifcate: action.payload };

    case ADMIN_DELETE_ONE_CERTIFCATE:
      return { ...state, adminRemoveCertifcate: action.payload };

    default:
      return state;
  }
};

export default adminCertifcateReducer;
