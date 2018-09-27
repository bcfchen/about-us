import React from "react";
import Typography from "@material-ui/core/Typography";
import CampaignGrid from "../CampaignGrid/CampaignGrid";

const CampaignContent = ({ title, summary }) => {
    return (<div>
        <Typography variant="title">{title}</Typography>
        <Typography variant="body2">{summary}</Typography>
        <CampaignGrid />
    </div>);
};

export default CampaignContent;