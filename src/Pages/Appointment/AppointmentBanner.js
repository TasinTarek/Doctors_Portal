import React from 'react';
import { DayPicker } from 'react-day-picker';
import pic from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
     

    return (
      <div style={{backgroundImage: `url(${bg})`}}>
        <div className="hero min-h-screen ">
          <div className="hero-content gap-40 flex-col lg:flex-row-reverse">
            <img src={pic} className="max-w-sm rounded-lg shadow-xl" />
            <div>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;