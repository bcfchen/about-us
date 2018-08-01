import React, { Component } from 'react';
import '../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AboutUs } from '../workflows/AboutUs/AboutUs';
const theme = createMuiTheme({
    palette: {
        theme: "light"
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <AboutUs></AboutUs>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App; 
