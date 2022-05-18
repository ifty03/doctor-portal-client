import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";

const AddDoctor = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);
  const { data: services, isLoading } = useQuery("services", () => {
    return fetch("https://doctors-prortal.herokuapp.com/service", {
      method: "GET",
    }).then((res) => res.json());
  });
  if (isLoading || loading) {
    return <Spinner />;
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handelAddDoctor = (e) => {
    setLoading(true);
    const key = "6ae4be522324a7f35282e6aa517d4990";
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const specialty = e.target.specialty.value;
    const formData = new FormData();
    formData.append("image", selectedFile);
    if (selectedFile) {
      fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const img = data?.data?.image?.url;
            const doctor = {
              name,
              email,
              phone,
              specialty,
              img: img,
            };
            fetch("https://doctors-prortal.herokuapp.com/doctor", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
              body: JSON.stringify(doctor),
            })
              .then((res) => {
                if (res.status === 401 || res.status === 401) {
                  setLoading(false);
                  toast.error("doctor information doesn't added");
                }
                return res.json();
              })
              .then((data) => {
                setLoading(false);
                if (data?.acknowledged) {
                  toast.success("Successfully doctors information added");
                  e.target.reset();
                }

                console.log(data);
                if (data.message) {
                  toast.error("doctor information already exist");
                }
              });
          }
        });
    }
  };
  return (
    <div className="lg:w-3/6 md:w-4/6 w-5/6 mx-auto shadow-lg py-7 px-6">
      <h3 className="flex justify-center items-center font-semibold text-lg ">
        ADD A DOCTOR <FaHandHoldingMedical className="ml-1" />
      </h3>
      <form onSubmit={handelAddDoctor} className="form-control mt-6">
        <label className="mb-1">Doctors Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Doctors Name"
          className="input mb-3 text-[16px] input-bordered"
        />
        <label className="mb-1">Doctor Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Doctor Email"
          className="input mb-3 text-[16px] input-bordered"
        />
        <label className="mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          required
          placeholder="Phone Number"
          className="input mb-3 text-[16px] input-bordered"
        />
        <label className="mb-1">Specialty</label>
        <select
          name="specialty"
          className="select select-bordered w-full mb-3 bg-[#E6E6E6]"
        >
          {services?.map((service, index) => (
            <option key={index}>{service?.name}</option>
          ))}
        </select>

        <label className="mb-1">Photo</label>
        <input
          type="file"
          name="img"
          onChange={changeHandler}
          required
          className="input mb-3 text-[16px] input-bordered"
        />
        <input className="btn w-full mt-3" type="submit" value="ADD DOCTOR" />
      </form>
    </div>
  );
};

export default AddDoctor;
