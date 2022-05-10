import React from "react";
import chair from "../../../assets/images/chair.png";
import bgiImage from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgiImage})` }}
      class="hero min-h-screen"
    >
      <div class="hero-content grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary  bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
            Get Started
          </button>
        </div>
        <img src={chair} class="w-full rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
