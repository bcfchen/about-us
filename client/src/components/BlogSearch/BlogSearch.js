import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { propTypes } from './types';
import * as _ from 'lodash';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: "0%",
        width: 200,
    }
});

const BlogSearch = ({ searchText, updateSearchText, updatePosts, classes }) => {
    return (<TextField
        id="search-input"
        value={searchText}
        className={classes.textField}
        onChange={e => { e.persist(); updateSearchText(e.target.value); updatePosts(e.target.value); }}
        label="Search for posts"
        type="search"
    />);
};

BlogSearch.propTypes = propTypes;
export default withStyles(styles)(BlogSearch);