import React from "react";
import Campaign from "../Campaign/Campaign";
import intlUniv from "react-intl-universal";

const CampaignList = () => {
    return (<div>
        <Campaign title={intlUniv.get("campaign.campaign1.title")}
            summary={intlUniv.get("campaign.campaign1.summary")} 
            messages={}/>
        <Campaign title={intlUniv.get("campaign.campaign2.title")} summary={intlUniv.get("campaign.campaign2.summary")} />
    </div>);
};

export default CampaignList;