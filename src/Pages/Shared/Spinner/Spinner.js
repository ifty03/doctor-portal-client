import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="min-h-screen ">
      <div className="sk-chase mx-auto mt-48">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
