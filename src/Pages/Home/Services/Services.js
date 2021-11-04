import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitement from '../../../images/whitening.png';
const services = [
    {
        name: "fluride",
        decription: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum libero ullam saepe quisquam? Ut natus dignissimos officiis! Odit, dignissimos.",
        img: fluride
    },

    {
        name: "cavity",
        decription: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum libero ullam saepe quisquam? Ut natus dignissimos officiis! Odit, dignissimos.",
        img: cavity
    },
    {
        name: "whitement",
        decription: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum libero ullam saepe quisquam? Ut natus dignissimos officiis! Odit, dignissimos.",
        img: whitement
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: "success.main", m: 2 }} variant="h6" >
                    OUR SERVICES
                </Typography>
                <Typography sx={{ color: "", m: 5, fontWeight: "bold" }} variant="h4"  >
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;