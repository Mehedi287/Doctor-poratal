import React from 'react';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"


import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBG = {

    background: `url(${bg})`

}
const Banner = () => {
    return (
        <Container style={{ bannerBG, marginTop: '20px' }} sx={{ flexGrow: 1, }}>
            <Grid style={{ display: 'flex', alignItems: 'center' }} container spacing={2}>
                <Grid style={{ textAlign: 'left' }} item xs={12} md={5}>
                    <Typography variant="h3">Your New Smile <br />Start Heare</Typography>
                    <Typography sx={{ color: "gray", fontSize: "14", fontWeight: '300' }} variant="6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam sed, culpa placeat itaque totam sit tenetur est omnis maxime.</Typography><br />
                    <Button style={{ marginTop: "20px", backgroundColor: "#91F44F" }} variant="contained">Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;