import React from 'react';
import SimpleCard from './SimpleCard';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    ShowProject__repoCard:{
        paddingLeft:"5px",
        paddingRight:"15px",
        paddingTop:"15px",
       
    }
})
function ShowProject({ repos }) {
    const classes = useStyles();
    return (
        repos.map(repo => {
            return (
                <Grid item xs={12} sm={6} md={4} className={classes.ShowProject__repoCard}>
                    <SimpleCard repo={repo} />
                </Grid>
            )
            
        })
    )
}

export default ShowProject;
