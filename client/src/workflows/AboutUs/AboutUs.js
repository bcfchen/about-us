import React from "react";
import * as blogActions from "../../redux/actions/blogActions";
import toast from "toastr";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BlogPostList from "../../components/BlogPostList/BlogPostList";
import BlogSearch from "../../components/BlogSearch/BlogSearch";
import BlogButtons from "../../components/BlogButtons/BlogButtons";
import * as _ from 'lodash';
import { propTypes } from './types';
import PanelList from "../../components/PanelList/PanelList";
import ThumbnailGrid from "../../components/ThumbnailGrid/ThumbnailGrid";
import { items } from "../../data/data";

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { panelItems: [] };
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked = (item) => {
        this.setState({ panelItems: [item, ...this.state.panelItems] });
    };

    render() {
        // let blurblur = this.state.isLoading ? "blur" : "";
        return (
            <div>
                <PanelList panelItems={this.state.panelItems} />
                <ThumbnailGrid itemClicked={this.itemClicked} thumbnailItems={items} />
            </div>);
    }
}

// BlogPage.propTypes = propTypes;
export default AboutUs;