import React, { Component } from 'react';
import '../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactIntlUnivWrapper from '../components/Localization/ReactIntlUnivWrapper/ReactIntlUnivWrapper';
import Revival from "../workflows/Revival/Revival";

const theme = createMuiTheme({
    palette: {
        theme: "light"
    },
});

class App extends Component {
    render() {
        return (
            <ReactIntlUnivWrapper>
                <MuiThemeProvider theme={theme}>
                    <div className="app">
                        <Revival />
                    </div>
                </MuiThemeProvider>
            </ReactIntlUnivWrapper>
        );
    }
}
export default App; 
