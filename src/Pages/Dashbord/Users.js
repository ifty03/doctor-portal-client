import { signOut } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () => {
    return fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        Navigate("/home");
        localStorage.removeItem("access-token");
      }
      return res.json();
    });
  });

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Successfully make an admin");
      });
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-secondary">All users</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr className="hover" key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button class="btn bg-green-600 text-white border-0  btn-xs">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        makeAdmin(user?.email);
                      }}
                      class="btn  btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button class="btn bg-red-600 border-0  btn-xs">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
