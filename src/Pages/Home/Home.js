import React from 'react';
import Footer from '../Shared/Footer';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Info from './Info';
import Landing from './Landing';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Landing/>
            <Info/>
            <Services/>
            <DentalCare/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
            
        </div>
    );
};

export default Home;