import React from "react";
import treatment from "../../assets/images/treatment.png";

const ServiceBanner = () => {
  return (
    <div className="hero min-h-screen mt-20">
      <div className="hero-content gap-20 md:mx-12 mx-4  lg:mx-40 grid grid-cols-1 lg:grid-cols-2">
        <img
          className="rounded-lg"
          src={treatment}
          alt="this is treatment pic"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary text-white  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
