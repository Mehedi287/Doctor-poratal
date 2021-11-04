import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { name, time, space } = booking
    return (
        <>


            <Grid item xs={12} md={4} sm={6}>

                <Paper elevation={3} >
                    <Typography style={{ fontSize: "15px", color: "green" }} variant="h6">
                        {name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", color: "black" }} variant="h6">
                        {time}
                    </Typography>
                    <Typography style={{ fontSize: "12px", color: "gray" }} variant="h6">
                        {name}
                    </Typography>
                    <Button onClick={handleOpen} style={{ marginTop: "20px", marginBottom: "10px", backgroundColor: "#91F44F" }} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal handleOpen={handleOpen} date={date} handleClose={handleClose} open={open} booking={booking} setOpen={setOpen}></BookingModal>
        </>

    );
};

export default Booking;