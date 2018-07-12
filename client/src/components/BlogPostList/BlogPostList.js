
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { withStyles } from '@material-ui/core/styles';
import React from "react";
const styles = theme => ({
    width: '20%',
    height: 30,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
});


const BlogPostList = ({ postsToRender }) => {
    let listItems = postsToRender.map(post =>
        <ListItem>
            <BlogPostCard post={post} />
        </ListItem>
    );

    return (<div className="blog-posts-container">
        <List>{listItems}</List>
    </div>);
};

export default withStyles(styles)(BlogPostList);