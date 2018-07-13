import { combineReducers } from 'redux';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
	blogPage: blogReducer
});

export default rootReducer;