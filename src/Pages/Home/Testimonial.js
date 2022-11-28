import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
      <div className="card p-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <div className="avatar grid grid-cols-2 p-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={testimonial.img} />
            </div>

            <div className='max-h-20 max-w-lg' >
              <h2 className='card-title'>{testimonial.name}</h2>
              <p>{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;