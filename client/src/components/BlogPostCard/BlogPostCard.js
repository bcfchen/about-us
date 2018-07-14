import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { propTypes } from './types';

const BlogPostCard = ({ post }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="title">{post.title}</Typography>
                <Typography varient="body1">{post.body}</Typography>
            </CardContent>
        </Card>
    );
};

BlogPostCard.propTypes = propTypes;
export default BlogPostCard;