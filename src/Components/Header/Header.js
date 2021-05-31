import React, { useState } from 'react';
import { AppBar, makeStyles, useTheme, Toolbar, useMediaQuery } from '@material-ui/core';
import Navbar from './Navbar';
import Sidebar from './Sidebar.js'
import { myData } from '../../data';

const useStyle = makeStyles({
    appBar:{
        height:"60px",
        backgroundColor:"white",
        color: "black",
        allignItems: "center",
        borderBottom: "0px"
        
    },
    appBarItems:{
        'font-size':"1.5rem",
        fontWeight: "500",

    }
})
const Header = () => {
    const classes= useStyle();
    const theme = useTheme();
    const isMatched = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.appBarItems}><h5>{myData.fullUsername}</h5></div>
                    {isMatched? <Sidebar />: <Navbar />}
                </Toolbar>

            </AppBar>
        </>
        
    )
}

export default Header;

