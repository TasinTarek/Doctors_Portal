import React from 'react';
import clock from '../../assets/images/clock.png'
import call from '../../assets/images/call.png'
import location from '../../assets/images/location.png'
import InfoCard from './InfoCard';

const Info = () => {
    return (
      <div className=" grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-5">
        <InfoCard bgClass="bg-accent" image={clock}></InfoCard>
        <InfoCard bgClass="bg-info" image={call}></InfoCard>
        <InfoCard bgClass="bg-accent" image={location}></InfoCard>
      </div>
    );
};

export default Info;