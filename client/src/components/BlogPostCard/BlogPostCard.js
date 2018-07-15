import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { propTypes } from './types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./styles";

const BlogPostCard = ({ post, classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} variant="title">{post.title}</Typography>
                <Typography varient="body1">{post.body}</Typography>
            </CardContent>
        </Card>
    );
};

BlogPostCard.propTypes = propTypes;
export default withStyles(styles)(BlogPostCard);