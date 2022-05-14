import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navManue = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-white" : "bg-base-100"
          }
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-white" : "bg-base-100"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-white" : "bg-base-100"
          }
          to="/appointment"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-white" : "bg-base-100"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-accent text-white" : "bg-base-100"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-accent text-white" : "bg-base-100"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={async () => {
              await signOut(auth);
              toast.success("sign Out successfully");
            }}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-accent text-white" : "bg-base-100"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar container mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navManue}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex lg:ml-auto">
          <ul className="menu menu-horizontal p-0">{navManue}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
