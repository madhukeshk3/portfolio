import React from 'react'
import { Grid,Box } from '@material-ui/core';
import { myData } from '../../data';
function ContactCall() {
    return (
        <>
        <Box clone order={{xs:1,sm:1,md: 1,lg:2}}>
            <Grid item sm={12} md={5}  style={{textAlign:"center",alignItems:"flex-start",marginBottom:"20px",marginTop:'20px'}} >
                <div >
                <a href={`tel:${myData.phone_No}`}>
                    <img style={{height:"50%" , width:"50%",objectFit:"fill"}} src="https://aakankshaq-profile.netlify.app/static/contact-9eab929fac4bd40bdb5f765e2c2ccb60.png" alt=' ' />
                </a>
                   
                </div>
                
            </Grid>
        </Box>
            
        </>
    )
}

export default ContactCall;
