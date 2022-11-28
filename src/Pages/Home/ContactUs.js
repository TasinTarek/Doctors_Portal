import React from 'react';
import contact from '../../assets/images/contact.jpg';
import Footer from '../Shared/Footer';

const ContactUs = () => {
    return (
      <>
        <div
        className='flex justify-center mt-10'
          style={{
            backgroundImage: `url(${contact})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "80vh",
            opacity: 0.5,
          }}
        >
          <div>
            <h1 className="text-primary font-bold text-2xl text-center  mt-32">
              Contact Us
            </h1>
            <h4 className="text-center text-4xl text-white">
              Stay Connected With Us
            </h4>
            <div className="flex items-center justify-center">
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="input w-full my-5"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input w-full mb-5 max-w-xs"
                />
                <br></br>
                <textarea
                  className="textarea max-w-7xl w-full"
                  placeholder="Tell Us Your Problems for Free!! Consultation"
                ></textarea>
                <br></br>
                <button className='btn-primary btn w-full p-5 mt-10'>Send</button>
              </form>
            </div>
          </div>
          
        </div>
      </>
    );
};

export default ContactUs;