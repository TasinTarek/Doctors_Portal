import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import { DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import AvailableServices from './AvailableServices';
import Footer from '../Shared/Footer'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableServices date={date}/>
            <Footer/>
        </div>
    );
};

export default Appointment;