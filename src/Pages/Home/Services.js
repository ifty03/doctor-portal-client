import React from "react";
import Service from "./service";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: "https://i.ibb.co/71VCFVp/fluoride.png",
    },
    {
      _id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: "https://i.ibb.co/DR3161m/cavity.png",
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: "https://i.ibb.co/55MZy4S/whitening.png",
    },
  ];
  return (
    <div>
      <h2 className="text-center font-bold text-secondary">OUR SERVICES</h2>
      <h2 className="text-center text-3xl font-medium">Services We Provide</h2>
      <div className="grid mx-5 gap-10 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
