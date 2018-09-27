import React from "react";
import intl from 'react-intl-universal';
const locales = {
    "en-US": require("../../../assets/en-US.json")
};

class ReactIntUnivWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: false
        };
    }

    componentDidMount() {
        intl.init({
            currentLocale: 'en-US', // TODO: determine locale here
            locales,
        }).then(() => {
            // After loading CLDR locale data, start to render
            this.setState({ initDone: true });
        });
    }

    render() {
        const { children, match } = this.props;
        return <div>{this.state.initDone && React.cloneElement(children, { match })}</div>;
    }
}


export default ReactIntUnivWrapper;