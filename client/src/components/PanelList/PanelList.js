import React from "react";
import Panel from "../Panel/Panel";
import { CSSTransitionGroup } from 'react-transition-group';

const PanelList = ({ panelItems }) => {
    const panelsExist = panelItems && panelItems.length > 0;
    const panels = panelsExist ?
        panelItems.map(panelItem =>
            <Panel key={panelItem.id} panelItem={panelItem}></Panel>) : [];

    return (
        <div className="panels-container">
            <CSSTransitionGroup
                transitionName="panels"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}>
                {panels}
            </CSSTransitionGroup>
        </div>);
};

export default PanelList;