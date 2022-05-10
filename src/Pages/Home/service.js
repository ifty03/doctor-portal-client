import React from "react";

const service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default service;
