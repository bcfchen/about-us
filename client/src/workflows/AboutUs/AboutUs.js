import React from "react";
import { propTypes } from './types';
import PanelList from "../../components/PanelList/PanelList";
import ThumbnailGrid from "../../components/ThumbnailGrid/ThumbnailGrid";
import { items } from "../../data/data";

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { panelItems: items.slice(0, 3) };
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked = (item) => {
        const poppedPanelItems = this.state.panelItems;
        if (poppedPanelItems.length >= 3) {
            poppedPanelItems.pop();
        }
        poppedPanelItems.unshift(item);
        this.setState({ panelItems: poppedPanelItems });
    };

    render() {
        // flag the items that are already being displayed (selected)
        const selectItemIds = this.state.panelItems.map(item => item.id);
        items.forEach(item => {
            item.isSelected = false;
            if (selectItemIds.indexOf(item.id) > -1) {
                item.isSelected = true;
            }
        });
        return (
            <div>
                <PanelList panelItems={this.state.panelItems} />
                <ThumbnailGrid itemClicked={this.itemClicked} thumbnailItems={items} />
            </div>);
    }
}

export default AboutUs;