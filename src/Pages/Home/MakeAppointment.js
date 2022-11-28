import React from 'react';
import bg from '../../assets/images/bg3.jpg'
import doctor from '../../assets/images/doctor-small.png'

const MakeAppointment = () => {
    return (
      <div
        className="flex justify-center items-center mt-20" 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="-mt-20">
          <img src={doctor} alt />
        </div>

        <div className='hero-content block'>
          <h1 className="text-5xl font-bold text-white">
            Make An Appointment Today
          </h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn  bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary ">
            Get Started
          </button>
        </div>
      </div>
    );
};

export default MakeAppointment;