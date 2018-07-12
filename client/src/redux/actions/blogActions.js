import { searchPosts } from "../../api/searchApi/searchApi";
import * as types from "../constants/action-types";

export const searchPostSuccess = posts => {
    return {
        type: types.GET_BLOG_POSTS_SUCCESS,
        posts
    };
};

export const startIndexUpdated = startIndex => {
    return {
        type: types.START_INDEX_UPDATED,
        startIndex
    };
};

export const searchPostByText = searchText => {
    return async (dispatch) => {
        let postsWithSearchText = await searchPosts(searchText);
        dispatch(searchPostSuccess(postsWithSearchText));
        return;
    };
};

export const updateStartIndex = startIndex => {
    return (dispatch) => {
        dispatch(startIndexUpdated(startIndex));
    }
}