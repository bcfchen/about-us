import React from "react";
import Campaign from "../Campaign/Campaign";
import intlUniv from "react-intl-universal";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const CampaignGrid = ({ messages }) => {
    const letThemKnowListItems = messages.letThemKnow.map(msg => <li>{msg}</li>);
    const letTHemComeListItems = messages.letThemCome.map(msg => <li>{msg}</li>);
    const letThemExploreListItems = messages.letThemExplore.map(msg => <li>{msg}</li>);
    const letThemEnjoyListItems = messages.letThemEnjoy.map(msg => <li>{msg}</li>);

    return (<div>
        <Grid className="top-row-grid" container spacing={24}>
            <Grid item xs={4}>
                <Typography variant="subheading">{intlUniv.get("campaign.letThemKnow")}</Typography>
                <ul>{letThemKnowListItems}</ul>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subheading">{intlUniv.get("campaign.letThemCome")}</Typography>
                <ul>{letTHemComeListItems}</ul>
            </Grid>
        </Grid>
        <Grid className="bottom-row-grid" container spacing={24}>
            <Grid item xs={4}>
                <Typography variant="subheading">{intlUniv.get("campaign.letThemExplore")}</Typography>
                <ul>{letThemExploreListItems}</ul>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subheading">{intlUniv.get("campaign.letThemEnjoy")}</Typography>
                <ul>{letThemEnjoyListItems}</ul>
            </Grid>
        </Grid>
    </div>);
};

export default CampaignGrid;