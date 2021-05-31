import React from 'react';
import { Toolbar,IconButton,Button, makeStyles } from '@material-ui/core';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const useStyles = makeStyles({
    navItems:{
        marginLeft: "auto",
        "& a":{
            color: "black"

        }
    }
})

function Navbar() {
    const classes = useStyles();
    return (
        <>
            <span className={classes.navItems}>
                <a href="#project"><Button color="inherit">Projects</Button></a>
                <a href="#contact"> <Button color="inherit">Contact</Button> </a> 
                <IconButton aria-label="menu">
                <Brightness2OutlinedIcon />
                </IconButton>
                
            </span>
        
        </>
    )
}

export default Navbar
