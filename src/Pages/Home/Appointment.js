import React from "react";
import bgImage from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="lg:flex flex-wrap justify-center items-center gap-10 mt-32"
    >
      <div className="lg:flex-1 lg:block hidden mt-[-100px]">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white lg:pr-10 lg:p-0 md:p-16 p-6">
        <h5 className="text-xl font-semibold text-secondary">Appointment</h5>
        <h3 className="text-4xl my-6">Make an appointment Today</h3>
        <p className="text-md mb-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Appointment;
