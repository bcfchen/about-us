import { searchPosts } from "../../api/searchApi/searchApi";
import * as types from "../constants/action-types";

export const searchPostSuccess = (posts, searchText) => {
    return { type: types.GET_BLOG_POSTS_SUCCESS, searchText, posts };
};

export const nextPage = () => { return { type: types.NEXT_PAGE } };
export const prevPage = () => { return { type: types.PREV_PAGE }; };
export const searchPostByText = searchText => {
    return async (dispatch) => {
        let postsWithSearchText = await searchPosts(searchText);
        dispatch(searchPostSuccess(postsWithSearchText, searchText));
        return;
    };
};