import React from 'react';
import Testimonial from './Testimonial';
import people1 from '../../assets/images/people-1.png';
import people2 from '../../assets/images/people-2.png';
import people3 from '../../assets/images/people-3.png';
import end from '../../assets/images/quote.svg'

const Testimonials = () => {
    const testimonials=[
        {
            _id: 1,
            name: "Tasin Tarek",
            location: "Dhaka",
            img: people1
        },
        {
            _id: 2,
            name: "Mo Shoaib",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Cristiano Ronaldo ",
            location: "Portugal",
            img: people3
        },
    ]
    return (
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-primary font-bold text-2xl text-start mt-32">
              Testimonial
            </h1>
            <h1 className="text-start text-4xl mb-32">What Our Patient Says</h1>
          </div>
          <div className="">
            <img className="w-48 h-44" src={end} />
          </div>
        </div>

        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </div>
      </div>
    );
};

export default Testimonials;