import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
      <div className="hero mt-40 ">
        <div className="hero-content grid gap-3 grid-cols-2">
          <div>
            <img src={treatment} className="max-w-sm rounded-lg shadow-xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care On Your Terms!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn  bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default DentalCare;