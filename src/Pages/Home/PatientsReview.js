import React from "react";
import quote from "../../assets/icons/quote.svg";
import Reviews from "./Reviews";

const PatientsReview = () => {
  const reviews = [
    {
      _id: 1,
      name: "Jon cina",
      city: "Dhaka",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: "https://source.unsplash.com/100x100/?portrait",
      rating: 4,
    },
    {
      _id: 2,
      name: "Roman ring",
      city: "chitagong",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: "https://source.unsplash.com/100x100/?portrait",
      rating: 5,
    },
    {
      _id: 3,
      name: "Brock lasnar",
      city: "cumilla",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: "https://source.unsplash.com/100x100/?portrait",
      rating: 4,
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between items-center mx-4 md:mx-12 lg:mx-12">
        <div>
          <h5 className="text-xl text-secondary font-semibold">Testimonial</h5>
          <h3 className="text-4xl font-semibold">What Our Patients Says</h3>
        </div>
        <div>
          <img
            className="lg:w-[192px] md:w-[120px] w-[98px]"
            src={quote}
            alt=""
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1 md:mx-12 mx-4">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default PatientsReview;
