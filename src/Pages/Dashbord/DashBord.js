import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useIsAdmin from "../../Hooks/useIsAdmin";

const DashBord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useIsAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#F1F5F9] px-10 py-7">
        <h3 className="text-secondary text-2xl mb-3 text-center">Dashboard</h3>
        <Outlet />
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment</Link>
            <NavLink
              className={({ isActive }) => isActive && "bg-accent text-white"}
              to="/dashboard/appointmentHistory"
            >
              My Appointment history
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "bg-accent text-white"}
              to="/dashboard/allAppointment"
            >
              All Appointment
            </NavLink>
            {admin && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "bg-accent text-white"
                  }
                  to="/dashboard/users"
                >
                  All Users
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "bg-accent text-white"
                  }
                  to="/dashboard/addDoctor"
                >
                  Add A Doctor
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive && "bg-accent text-white"
                  }
                  to="/dashboard/manageDoctors"
                >
                  Manage Doctors
                </NavLink>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBord;
