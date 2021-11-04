import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calander from '../../Shered/Calander/Calander';
const AppointmnetHeaser = ({ date, setDate }) => {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Calander date={date} setDate={setDate}></Calander>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "400px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmnetHeaser;