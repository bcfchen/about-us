import { combineReducers } from 'redux';
import weatherPageReducer from './weatherPageReducer';
import blogReducer from './blogReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	blogPage: blogReducer
});

export default rootReducer;