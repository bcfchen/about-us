import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { propTypes } from './types';

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

const BlogSearch = ({ searchText, onSearch, classes }) => {
    return (<TextField
        id="search-input"
        value={searchText}
        className={classes.textField}
        onChange={onSearch}
        label="Search for posts"
        type="search"
    />);
};

BlogSearch.propTypes = propTypes;
export default withStyles(styles)(BlogSearch);