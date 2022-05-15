import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBord = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-[#F1F5F9] px-10 py-7">
        <h3 className="text-secondary text-2xl mb-3 text-center">Dashboard</h3>
        <h3 className="text-secondary text-2xl mb-3">Total Appointment</h3>
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              className={({ isActive }) => isActive && "bg-accent text-white"}
              to="/dashboard"
            >
              My Appointment
            </NavLink>
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
            <NavLink
              className={({ isActive }) => isActive && "bg-accent text-white"}
              to="/dashboard/users"
            >
              All Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBord;
