import React from "react";
import TextField from '@material-ui/core/TextField';
import { propTypes } from './types';

const BlogSearch = ({ searchText, updateSearchText, updatePosts, classes }) => {
    return (
        <div className="blog-search-container">
            <TextField
                id="search-input"
                value={searchText}
                onChange={e => { e.persist(); updateSearchText(e.target.value); updatePosts(e.target.value); }}
                label="Search for posts"
                type="search"
            /></div>);
};

BlogSearch.propTypes = propTypes;
export default BlogSearch;