import React from "react";

const Service = ({ service, setTritment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary block mx-auto">{name}</h2>
        <p className="text-center">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-sm text-red-500">Try anoteher date</span>
          )}
        </p>
        <p className="text-center">{slots.length} SPACES AVAILABLE</p>
        <div className="card-actions justify-center">
          <label
            onClick={() => {
              setTritment(service);
            }}
            className="btn modal-button border-0 mt-3 text-white  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
            disabled={slots.length ? "" : "disabled"}
            htmlFor="booking-modal"
          >
            {slots.length ? (
              "Book Appointment"
            ) : (
              <span className="text-white">Try Another date</span>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
