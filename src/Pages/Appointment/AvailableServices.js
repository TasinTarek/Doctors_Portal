import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import ServiceCard from './ServiceCard';
import BookingModal from './BookingModal';

const AvailableServices = ({date}) => {
    const [treatment, setTreatment] = useState();  
    const [services, setServices] = useState([]);
    const formatedDate = format(date, 'PP');
    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
      <div >
        <h1 className="text-primary font-bold text-2xl text-center mt-32">
          Available Services On {format(date, "PP")}
        </h1>
        <h1 className="text-accent text-center">Please Select Services</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {
            services.map(service=><ServiceCard
            key={service._id}
            setTreatment={setTreatment}
            service={service}
            ></ServiceCard>)
          }
        </div>
        {
          treatment && <BookingModal
          date={date}
          treatment={treatment}
         setTreatment={setTreatment}
          />
        }
      </div>
    );
};

export default AvailableServices;