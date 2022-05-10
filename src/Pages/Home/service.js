import React from "react";

const service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div class="card bg-base-100 shadow-md">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default service;
