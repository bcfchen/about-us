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
        backgroundColor: "#ddd",
    },
    gridList: {
        width: "100%",
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    card: {
        maxWidth: 200,
    },
    media: {
        height: 160,
        paddingTop: '56.25%', // 16:9
    }
});

const ThumbnailGrid = ({ classes, thumbnailItems, itemClicked }) => {
    const listItems = thumbnailItems.map(thumbnailItem =>
        <li><img src={thumbnailItem.img} onClick={() => itemClicked(thumbnailItem)} /></li>);

    return (
        <div className={classes.root}>
            <ul className="thumbnail-list">
                {listItems}
            </ul>
        </div>
    );
};

export default withStyles(styles)(ThumbnailGrid);