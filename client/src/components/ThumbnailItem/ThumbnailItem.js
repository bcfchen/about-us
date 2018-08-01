import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 100,
        paddingTop: '56.25%', // 16:9
    }
};

const ThumbnailItem = ({ item }) => {
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={require('assets/pikachu.jpg')} />
            </Card>
        </div>);
};

export default withStyles(styles)(ThumbnailItem);