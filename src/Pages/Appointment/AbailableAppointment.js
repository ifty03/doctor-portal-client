import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AbailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [tritment, setTritment] = useState({});
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-16">
      <p className=" text-2xl font-semibold text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </p>
      <BookingModal date={date} tritment={tritment}></BookingModal>
      <div className="mt-10 mx-4 md:mx-9 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Service
            key={service?._id}
            service={service}
            setTritment={setTritment}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default AbailableAppointment;
