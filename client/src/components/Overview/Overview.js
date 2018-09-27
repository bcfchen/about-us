import React from "react";
import intlUniv from "react-intl-universal";

const Overview = () => {
    return (<div className="overview">
        <div className="overview-intro">{intlUniv.get("overview.intro")}</div>
        <div className="overview-body">{intlUniv.get("overview.body")}</div>
    </div>);
};

export default Overview;