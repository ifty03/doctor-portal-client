import React from "react";
import bgImage from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="py-[65px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div class="card mx-auto flex-shrink-0 w-full max-w-lg">
        <h4 className="text-xl text-center text-secondary">Contact Us</h4>
        <h2 className="text-3xl text-white text-center mb-4 mt-2 font-semibold">
          Stay connected with us
        </h2>
        <div class="card-body">
          <div class="form-control">
            <input
              type="text"
              placeholder="Email Address"
              class="input mb-[12px] input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Subject"
              class="input mb-[12px] input-bordered"
            />
          </div>
          <div class="form-control">
            <textarea
              class="textarea textarea-secondary h-[136px]"
              placeholder="Your message"
            ></textarea>
          </div>
          <div class="form-control mt-6">
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
