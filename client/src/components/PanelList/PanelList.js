import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Panel from "../Panel/Panel";

const PanelList = ({ panelItems }) => {
    const listStyle = {
        display: "flex",
        flexDirection: "row",
        padding: 0,
        minHeight: 300
    };

    const panelsExist = panelItems && panelItems.length > 0;

    const panels = panelsExist ? panelItems.map(panelItem =>
        <ListItem key={panelItem.id} >
            <Panel panelItem={panelItem}></Panel>
        </ListItem>) : [];

    return (<List style={listStyle}>
        {panels}
    </List>);
};

export default PanelList;