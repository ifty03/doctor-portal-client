import React from "react";
import { FiClock } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Info = () => {
  return (
    <div
      style={{ marginBottom: "100px" }}
      className="text-white mx-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
    >
      <div
        style={{ padding: "52px 25px" }}
        className="bg-gradient-to-r from-secondary to-primary gap-6 flex rounded-xl  items-center h-48"
      >
        <FiClock style={{ fontSize: "120px" }} className=""></FiClock>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Opening Hours</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>
      <div
        style={{ padding: "52px 25px" }}
        className="bg-accent gap-6 flex items-center rounded-xl h-48"
      >
        <MdLocationOn style={{ fontSize: "100px" }} className=""></MdLocationOn>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Visit our location</h4>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div
        style={{ padding: "52px 25px" }}
        className="bg-gradient-to-r from-secondary to-primary rounded-xl gap-6 flex items-center h-48"
      >
        <FiPhoneCall style={{ fontSize: "80px" }} className=""></FiPhoneCall>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact us now</h4>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
