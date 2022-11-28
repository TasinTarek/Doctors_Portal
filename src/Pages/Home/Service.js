import React from 'react';

const Service = ({service}) => {
    
    return (
      <div className="card w-max-lg bg-base-100 shadow-xl">
        <div className="card-body flex justify-center items-center">
            <img src={service.img}/>
          <h2 className="card-title">{service.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    );
};

export default Service;