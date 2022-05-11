import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import PatientsReview from "./PatientsReview";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <PatientsReview />
      <ContactUs />
    </div>
  );
};

export default Home;
