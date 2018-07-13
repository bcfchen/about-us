import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import { propTypes } from './types';

const styles = theme => ({
    width: '20%',
    height: 30,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
});

const BlogPostList = ({ isLoading, postsToRender }) => {
    let listItems = postsToRender
        .map(post => <ListItem key={post.id}><BlogPostCard post={post} /></ListItem>);

    return (
        <div>
            {this.isLoading && <ProgressIndicator />}
            <Grow in={!isLoading}>
                <div className="blog-posts-container">
                    <List>{listItems}</List>
                </div>
            </Grow>
        </div>
    );
};

BlogPostList.propTypes = propTypes;
export default withStyles(styles)(BlogPostList);