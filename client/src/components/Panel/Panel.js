import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        width: 200,
        height: 300,
        float: "left",
        marginLeft: 10,
        marginRight: 10

    },
    media: {
        height: 100,
        paddingTop: "60%"
    }
};

const Panel = ({ classes, panelItem }) => {
    return (<Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={panelItem.img} />
        <CardContent>
            <Typography variant="headline">{panelItem.name}</Typography>
            <Typography varient="body" >{panelItem.description}</Typography>
        </CardContent>
    </Card>);
};

export default withStyles(styles)(Panel);