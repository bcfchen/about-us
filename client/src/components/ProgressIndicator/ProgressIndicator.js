import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { propTypes } from "./types";

const ProgressIndicator = ({ classes }) => {
    return (
        <div className="progress-indicator">
            <CircularProgress variant="indeterminate" className={classes.progress} />
        </div>
    );
}

const styles = theme => ({
    progress: {
        top: "45%",
        left: "45%",
        position: "fixed",
        zIndex: "999"
    }
});

ProgressIndicator.propTypes = propTypes;
export default withStyles(styles)(ProgressIndicator);
