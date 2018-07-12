import React from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

const BlogSearch = ({ searchText, onChange, classes }) => {

    return (<TextField
        id="search-input"
        className={classes.textField}
        label="Search for posts"
        type="search"
    />);
};

export default withStyles(styles)(BlogSearch);