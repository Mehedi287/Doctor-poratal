import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import teatment from "../../../images/treatment.png"
const Expentional = () => {
    return (
        <Grid sx={{ mt: 4 }} justifyContent="center"
            alignItems="center" container spacing={3}  >
            <Grid item xs={12} md={5}>

                <img style={{ width: "250px", marginRight: "-20px" }} src={teatment} alt="" />
            </Grid>
            <Grid item xs={12} md={7} sx={{ textAlign: "left" }}>
                <Typography sx={{ p: 2 }} variant="h4" >
                    Exceptional Dental <br />
                    Care On Yearsw Terms
                </Typography>
                <Typography sx={{ fontSize: "13", m: 2, color: 'gray', textAlign: "left" }} variant="h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam aut obcaecati natus corrupti, aspernatur distinctio vitae, aperiam officia illum, earum aliquid mollitia velit laborum animi eius deleniti tempore. Distinctio.
                </Typography>
                <Button sx={{ m: 2 }} variant="contained">Learn More</Button>
            </Grid>
        </Grid>
    );
};

export default Expentional;