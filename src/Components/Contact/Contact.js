import React,{ useState } from 'react'
import { Grid, makeStyles,TextField } from '@material-ui/core';
import ContactForm from './ContactForm';
import ContactCall from './ContactCall';

const useStyle = makeStyles({
    contact:{
        marginTop:"7%",
    }
})
function Contact() {
    
    const classes = useStyle();
    return (
        <div className={classes.contact} id="contact">
            <h1>Contact</h1>

            <Grid container style={{marginTop:"1%"}}>
               <ContactForm />
               <ContactCall />
               
            </Grid>
            
        </div>
    )
}

export default Contact;

