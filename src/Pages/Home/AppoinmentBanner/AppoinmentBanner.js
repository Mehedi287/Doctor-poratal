import React from 'react';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'

const AppoinmentBanner = () => {
    const appointment = {
        background: `url(${bg})`,
        backgroundColor: 'black',
        backgroundBlendMode: "normal",
        marginTop: 175
    }
    return (
        <div>
            <Box style={appointment} sx={{ flexGrow: 1, bgcolor: 'success.main' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor} style={{ width: 400, marginTop: -100 }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "left" }}>
                        <Box>

                            <Typography style={{ color: "#91F44F" }} variant="h6">
                                Appointment
                            </Typography>
                            <Typography variant="h4">
                                Make a Appointment Today
                            </Typography>
                            <Typography variant="h6" style={{ color: "white", fontSize: "14px" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quam nulla illo vitae voluptate quibusdam odit accusamus beatae sit temporibus.
                            </Typography>
                            <Button style={{ marginTop: "20px", backgroundColor: "#91F44F" }} variant="contained">Learn More</Button></Box>


                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppoinmentBanner;