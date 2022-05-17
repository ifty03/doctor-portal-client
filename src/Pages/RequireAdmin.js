import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Spinner from "./Shared/Spinner/Spinner";
import useIsAdmin from "../Hooks/useIsAdmin";
import { signOut } from "firebase/auth";

const RequirAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, isLoading] = useIsAdmin(user);
  let location = useLocation();

  if (loading || isLoading) {
    return <Spinner />;
  }

  if (!user || !admin) {
    signOut(auth);
    localStorage.removeItem("access-token");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequirAdmin;
