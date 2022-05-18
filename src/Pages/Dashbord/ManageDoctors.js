import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import Swal from "sweetalert2";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () => {
    return fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json());
  });
  if (isLoading) {
    return <Spinner />;
  }

  const handelRemoveDoctor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5000/doctor/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log("data", data);
          });
      }
    });
  };

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor, index) => (
            <tr className="hover" key={doctor._id}>
              <th>{index + 1}</th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={doctor?.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{doctor?.name}</div>
                    <div class="text-sm opacity-50">{doctor?.specialty}</div>
                  </div>
                </div>
              </td>
              <td>{doctor?.email}</td>
              <td>{doctor?.phone}</td>
              <td>
                <button
                  onClick={() => {
                    handelRemoveDoctor(doctor._id);
                  }}
                  class="btn btn-xs btn-error text-gray-100"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
