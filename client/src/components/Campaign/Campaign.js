import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CampaignContent from "../CampaignContent/CampaignContent";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        width: "100%",
        height: "100%",
        float: "left",
        marginLeft: 10,
        marginRight: 10

    },
    media: {
        height: 100,
        paddingTop: "60%"
    }
});

const Campaign = ({ classes, title, summary }) => {
    return (<div className="root">
        <Grid container spacing={24}>
            <Grid item xs={4} >
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={'https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png'} />
                </Card>
            </Grid>
            <Grid item xs={8} >
                <CampaignContent title={title} summary={summary} />
            </Grid>
        </Grid>
    </div>);
};

export default withStyles(styles)(Campaign);