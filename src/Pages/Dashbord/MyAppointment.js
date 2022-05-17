import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import { FiEdit } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const { data, isLoading, reFetch } = useQuery(["booking", user], () =>
    fetch(
      `https://doctors-prortal.herokuapp.com/booking?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("access-token");
        Navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div class="overflow-x-auto">
      <h2 className="text-2xl text-secondary mb-2">
        Total Appointment {data?.length}
      </h2>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Treatment</th>
            <th>Slot</th>
            <th>date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((book, index) => {
            return (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{book?.tritment}</td>
                <td>{book?.slot}</td>
                <td>{book?.date}</td>
                <td>
                  <Link to="/appointment">
                    <FiEdit className="bg-secondary cursor-pointer hover:bg-primary rounded-full p-2 text-white text-4xl" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
