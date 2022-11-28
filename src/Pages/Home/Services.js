import React from 'react';
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
const services = [
  {
    _id: 1,
    "name": "Fluoride Treatment",
    img: img1,
  },
  {
    _id: 2,
    "name": "Cavity Filling",
    img: img2,
  },
  {
    _id: 3,
    "name": "Teeth Whitening",
    img: img3,
  },
];
    return (
      <div>
        <h4 className="text-primary font-bold text-2xl text-center mt-32">Our Services</h4>
        <h3 className="text-center text-4xl ">Services we Provide</h3>
        <div className='grid xl:grid-cols-3  gap-5'>
          {services.map((service) => (
            <Service 
            key= {service._id}
            service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;