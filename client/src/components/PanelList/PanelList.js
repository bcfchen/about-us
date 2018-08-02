import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Panel from "../Panel/Panel";
import { CSSTransitionGroup } from 'react-transition-group';

const PanelList = ({ panelItems }) => {
    const panelsExist = panelItems && panelItems.length > 0;
    const panels = panelsExist ? panelItems.map(panelItem =>
        <Panel panelItem={panelItem}></Panel>) : [];

    return (
        <div className="panels-container">
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={true}
                transitionEnterTimeout={500}
                transitionLeave={true}
                transitionLeaveTimeout={300}>
                {panels}
            </CSSTransitionGroup></div>);
};

export default PanelList;