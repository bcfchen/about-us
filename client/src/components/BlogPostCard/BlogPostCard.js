import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { propTypes } from './types';

const BlogPostCard = ({ post }) => {
    return (<Card>
        <CardContent>
            <Typography variant="headline">{post.title}</Typography>
            <Typography>{post.body}</Typography>
        </CardContent>
    </Card>);
};

BlogPostCard.propTypes = propTypes;
export default BlogPostCard;