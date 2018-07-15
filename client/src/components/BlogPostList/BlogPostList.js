import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import { propTypes } from './types';

const styles = theme => ({
    root: {
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "650px",
        minHeight: "400px",
        maxHeight: "400px",
        backgroundColor: theme.palette.background.transparent,
    },
    overrides: {
        MuiList: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        }
    }
});

const BlogPostList = ({ isLoading, postsToRender, classes }) => {
    let listItems = postsToRender
        .map(post => <ListItem key={post.id}><BlogPostCard post={post} /></ListItem>);

    return (
        <div className={classes.root}>
            {isLoading && <ProgressIndicator />}
            <Grow in={!isLoading}>
                <List>{listItems}</List>
            </Grow>
        </div>
    );
};

BlogPostList.propTypes = propTypes;
export default withStyles(styles)(BlogPostList);