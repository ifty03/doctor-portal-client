import React from "react";

const Reviews = (props) => {
  const { img, review, name, city, rating } = props?.review;
  return (
    <div className="max-w-md md:mt-14 mt-6 p-8 overflow-hidden rounded-lg shadow-md bg-coolGray-50 text-coolGray-800">
      <article>
        <p className="mt-4 text-md">{review}</p>
        <div className="flex items-center mt-8 space-x-4">
          <img
            src={img}
            alt=""
            className="w-[75px] border-[3px] p-[3px] border-secondary rounded-full bg-coolGray-500"
          />
          <div>
            <h3 className="text-xl font-medium">{name}</h3>
            <time dateTime="2021-02-18" className="text-sm text-coolGray-600">
              {city}
            </time>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Reviews;
