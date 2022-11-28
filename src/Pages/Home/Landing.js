import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'

const Landing = () => {
    return (
      
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="hero min-h-screen"
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Get Your New Smile Starts Here!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="text-white font-bold text-lg btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary ...">Get Started</button>
            </div>

          </div>

        </div>
      
    );
};

export default Landing;