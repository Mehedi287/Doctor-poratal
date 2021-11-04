import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Boolking/Booking';
const Bookings = [
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 1
    },
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 2
    },
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 3
    },
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 4
    },
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 5
    },
    {
        name: "teeth",
        time: "8am-11am",
        space: "10 available space",
        id: 6
    },

]

const AvailvaleAppointment = ({ date }) => {
    return (
        <Container>
            <h1>Available Appointment On {date.toDateString()}</h1>
            <Grid container spacing={3}>
                {
                    Bookings.map(booking => <Booking key={booking.id} date={date} booking={booking}></Booking>)
                }
            </Grid>

        </Container>
    );
};

export default AvailvaleAppointment;