import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Service from "./Service";
import Spinner from "../Shared/Spinner/Spinner";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";

const AbailableAppointment = ({ date }) => {
  const [tritment, setTritment] = useState({});
  const bookingDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", bookingDate], () =>
    fetch(`http://localhost:5000/available?date=${bookingDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="my-16">
      <p className=" text-2xl font-semibold text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </p>
      {tritment && (
        <BookingModal
          date={date}
          setTritment={setTritment}
          tritment={tritment}
          refetch={refetch}
        ></BookingModal>
      )}
      <div className="mt-10 mx-4 md:mx-9 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((service) => (
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
