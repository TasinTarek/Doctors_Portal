import React from 'react';
import { format } from "date-fns";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import  {toast} from 'react-toastify';

const BookingModal = ({treatment,date,setTreatment}) => {
  
  const [user, loading, error] = useAuthState(auth);
  const formatedDate = format(date, 'PP');

  

  const {name, Slots,_id} = treatment;
    const handleBooking=event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot,_id,name,user.displayName,);
       
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formatedDate,
          slot,
          patient: user.email,
          patientName: user.displayName,
          phone: event.target.number.value
        };

        fetch('http://localhost:5000/booking',{
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if (data.success) {
            toast(`Appointment is set ${formatedDate} at ${slot}`);
          } else {
            toast.error(
              `Already have an appointment  ${data.booking?.date} at ${data.booking?.slot}`
            );
          }
          //to close modal
          setTreatment(null);
        })
        
        

       
    }
    
      
     
    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{name}</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 justify-items-center">
              <input
                value={format(date, "PP")}
                type="text"
                placeholder="Type here"
                className="input input-ghost mt-2 input-xs w-full "
              />
              <select name='slot' className="select select-bordered select-xs w-full ">
                {Slots.map((Slot) => (
                  <option value={Slot}>{Slot}</option>
                ))}
              </select>

              <input
                type="email"
                name='email'
                disabled
                value={user?.email}
                placeholder=''
                className="input input-bordered mt-2 input-xs w-full "
              />
              <input
                type="text"
                name='name'
                disabled
                value={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered mt-2 input-xs w-full "
              />
              <input
                type="text"
                name='number'
                placeholder="Your Number"
                className="input input-bordered mt-2 input-xs w-full "
              />
              <input
                type="submit"
                value="Submit"
                className="input input-bordered mt-2 input-xs w-full "
              />
            </form>
          </div>
        </div>
        <input />
      </div>
    );
};

export default BookingModal;