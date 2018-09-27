import React, { Component } from 'react';
import '../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PokePage } from '../workflows/PokePage/PokePage';
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
                    <PokePage />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App; 
