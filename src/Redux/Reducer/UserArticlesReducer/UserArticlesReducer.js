import { GET_USER_ALL_ARTICLE, GET_USER_ONE_ARTICLE } from '../../Type';

const initalState = {
  userAllArticle: [],
  userOneArticle: [],
};

const userArticlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_ALL_ARTICLE:
      return { ...state, userAllArticle: action.payload };

    case GET_USER_ONE_ARTICLE:
      return { ...state, userOneArticle: action.payload };

    default:
      return state;
  }
};

export default userArticlesReducer;
