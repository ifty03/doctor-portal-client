import React, { useState } from "react";
import AbailableAppointment from "./AbailableAppointment";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AbailableAppointment date={date} setDate={setDate} />
    </div>
  );
};

export default Appointment;
