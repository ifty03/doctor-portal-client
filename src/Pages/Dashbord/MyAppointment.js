import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const { data, isLoading, reFetch } = useQuery(["booking", user], () =>
    fetch(`http://localhost:5000/booking?email=${user?.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div class="overflow-x-auto">
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
          {data.map((book, index) => {
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
