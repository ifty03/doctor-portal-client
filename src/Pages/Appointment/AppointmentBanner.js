import { React, useState } from "react";
import chair from "../../assets/images/chair.png";
import appointmentBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${appointmentBg})`,
        backgroundSize: "90%",
      }}
      class="hero lg:min-h-screen"
    >
      <div class="hero-content gap-10 lg:mx-20 md:mx-9 mx-5 grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:order-1 order-2">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <img
          src={chair}
          class="w-full order-1 lg:order-2 rounded-lg shadow-2xl"
          alt="this is chair"
        />
      </div>
    </div>
  );
};

export default AppointmentBanner;