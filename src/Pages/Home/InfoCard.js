import React from 'react';

const InfoCard = ({ image, bgClass }) => {
  return (
    <div className={`card lg:card-side  shadow-lg ${bgClass} p-5 w-auto`}>
      <figure>
        <img className="w-20 h-20" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white font-semibold">New album is released!</h2>
        <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;