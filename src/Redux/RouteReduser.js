import { combineReducers } from 'redux';
import adminArticlesReducer from './Reducer/AdminArticlesReducer/AdminArticleReducer';

export const routeReducer = combineReducers({
  adminArticlesReducer: adminArticlesReducer,
});
