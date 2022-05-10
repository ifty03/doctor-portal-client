import React from "react";
import chair from "../../../assets/images/chair.png";
import bgiImage from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgiImage})` }}
      class="hero min-h-screen"
    >
      <div class="hero-content lg:my-32 md:mx-12 mx-4 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 class="text-5xl font-bold">Your Smile Our Smile :)</h1>
          <p class="py-6">
            Healthy living to most people means both physical and mental health
            are in balance or functioning well together. In many instances,
            physical and mental health are closely linked, so that a change good
            or bad in one directly affects the other. Consequently.
          </p>
          <button class="btn btn-primary text-white  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
            Get Started
          </button>
        </div>
        <img src={chair} class="w-full rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
