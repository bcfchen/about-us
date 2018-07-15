import React, { Component } from 'react';
import '../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BlogPage from '../workflows/BlogPage/BlogPage';
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
                    <BlogPage></BlogPage>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App; 
