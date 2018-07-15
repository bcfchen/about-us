import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import { propTypes } from './types';
import Typography from '@material-ui/core/Typography';
import { styles } from "./styles";

const BlogPostList = ({ isLoading, postsToRender, classes }) => {
    let listItems = postsToRender
        .map(post => <ListItem key={post.id}><BlogPostCard post={post} /></ListItem>);
    let noPostsToRender = listItems.length === 0 && !isLoading;
    return (
        <div className={classes.root}>
            {isLoading && <ProgressIndicator />}
            {noPostsToRender
                && <Typography className={classes.placeHolder} variant="display1">No posts available :(</Typography>}
            <Grow in={!isLoading}>
                <List className={classes.list}>{listItems}</List>
            </Grow>
        </div>
    );
};

BlogPostList.propTypes = propTypes;
export default withStyles(styles)(BlogPostList);