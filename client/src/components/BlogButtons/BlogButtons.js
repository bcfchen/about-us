import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { propTypes } from './types';

const BlogButtons = ({ prevButtonActive, nextButtonActive, prevPage, nextPage }) => {
    return (<div className="btns-container">
        <Grid container>
            <Grid item xs>
                <Button
                    color="secondary"
                    variant="contained"
                    disabled={!prevButtonActive}
                    onClick={prevPage}>Previous</Button>
            </Grid>
            <Grid item xs>
                <Button
                    variant="contained" color="secondary"
                    disabled={!nextButtonActive}
                    onClick={nextPage}>Next</Button>
            </Grid>
        </Grid>
    </div>);
};

BlogButtons.propTypes = propTypes;
export default BlogButtons;