import {
  ADMIN_CREATE_NEW_ARTICLE,
  ADMIN_DELETE_ONE_ARTICLE,
  ADMIN_UPDATE_ONE_ARTICLE,
  GET_ADMIN_ALL_ARTICLE,
  GET_ADMIN_ONE_ARTICLE,
} from '../../Type';

const initalState = {
  adminAllArticle: [],
  adminOneArticle: [],
  adminAddArticle: [],
  adminEditArticle: [],
  adminRemoveArticle: [],
};

const adminArticlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_ARTICLE:
      return { ...state, adminAllArticle: action.payload };

    case GET_ADMIN_ONE_ARTICLE:
      return { ...state, adminOneArticle: action.payload };

    case ADMIN_CREATE_NEW_ARTICLE:
      return { ...state, adminAddArticle: action.payload };

    case ADMIN_UPDATE_ONE_ARTICLE:
      return { ...state, adminEditArticle: action.payload };

    case ADMIN_DELETE_ONE_ARTICLE:
      return { ...state, adminRemoveArticle: action.payload };

    default:
      return state;
  }
};

export default adminArticlesReducer;
