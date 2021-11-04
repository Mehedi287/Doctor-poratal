import React from 'react';
import Navigation from '../../Shered/Navigation/Navigation';
import AppointmnetHeaser from '../AppointmetnHeader/AppointmnetHeaser';
import AvailvaleAppointment from '../AvivaleAppoinment/AvailvaleAppointment';

const Appontment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmnetHeaser date={date} setDate={setDate}></AppointmnetHeaser>
            <AvailvaleAppointment date={date}></AvailvaleAppointment>
        </div>
    );
};

export default Appontment;