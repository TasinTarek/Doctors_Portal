import React from 'react';

const ServiceCard = ({service, setTreatment}) => {
  const {name, Slots} = service;
    return (
      <div>
        <div className="card w-max-lg bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>
              {Slots.length > 0 ? (
                <p>{Slots[0]}</p>
              ) : (
                <span className="text-red-600">Try Another Date</span>
              )}
            </p>
            <p>
              {Slots.length} {Slots.length > 1 ? "Spaces" : "Space"} Available
            </p>

            <div className="card-actions">
              <label
                disabled={Slots.length=== 0}
                htmlFor="booking-modal"
                className="btn btn-primary"
                onClick={() => setTreatment(service)}
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;