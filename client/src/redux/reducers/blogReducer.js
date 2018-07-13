import * as types from "../constants/action-types";
import initialState from './initialState';
import BlogPageState from "./BlogPageState";

export default function blogReducer(state = initialState.ui, action) {
    const INCREMENT = 10;
    let newState, builder = new BlogPageState.builder().init({ ...state }, INCREMENT);
    switch (action.type) {
        case types.GET_BLOG_POSTS_SUCCESS:
            newState = builder.forSearchResults(action.posts, action.searchText).build();
            break;
        case types.NEXT_PAGE:
            newState = builder.forNextPage().build();
            break;
        case types.PREV_PAGE:
            newState = builder.forPrevPage().build();
            break;
        default:
            break;
    }
    return newState || state;
}