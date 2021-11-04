import React from 'react';
import Navigation from '../../Shered/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Expentional from '../Exptional/Expentional';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Expentional></Expentional>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;