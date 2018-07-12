import * as types from "../constants/action-types";
import initialState from './initialState';

export default function blogReducer(state = initialState.ui, action) {
    let newState;
    switch (action.type) {
        case types.GET_BLOG_POSTS_SUCCESS:
            newState = { ...state, posts: action.posts, startIndex: 0 };
            break;
        case types.START_INDEX_UPDATED:
            newState = { ...state, startIndex: action.startIndex };
            break;
        default:
            break;
    }
    return newState || state;
}