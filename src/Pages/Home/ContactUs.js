import React from "react";
import bgImage from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="py-[50px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="card mx-auto flex-shrink-0 w-full max-w-lg">
        <h4 className="text-xl text-center text-secondary">Contact Us</h4>
        <h2 className="text-3xl text-white text-center mb-4 mt-2 font-semibold">
          Stay connected with us
        </h2>
        <div className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input mb-[12px] input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input mb-[12px] input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-secondary h-[136px]"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn px-8 w-fit mx-auto btn-primary text-white  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
