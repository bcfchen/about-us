import React from "react";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 160,
        paddingTop: '56.25%', // 16:9
    }
});

const ThumbnailGrid = ({ classes, thumbnailItems, itemClicked }) => {
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {thumbnailItems.map(item => (
                    <GridListTile key={item.id} cols={1}>
                        <Card className={classes.card}>
                            <CardMedia
                                onClick={() => itemClicked(item)}
                                image={item.img}
                                className={classes.media}>
                            </CardMedia>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withStyles(styles)(ThumbnailGrid);