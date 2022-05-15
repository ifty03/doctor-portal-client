import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../Shared/Spinner/Spinner";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(gUser || eUser);

  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate, token]);

  /* loading spinner */
  if (gLoading || eLoading || resetSending) {
    return <Spinner />;
  }

  /* email and password login */
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    toast.success("Login successfully done");
    e.target.reset();
  };

  /* login with google  */
  const handelGoogleLogin = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  /* protacted page */

  return (
    <div>
      <div className="hero px-5 min-h-screen bg-base-100">
        <div className="card flex-shrink-0 w-full max-w-[455px] shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <h3 className="text-[25px] font-semibold text-center mb-2">
              Login
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                required
                name="password"
                className="input input-bordered"
              />
              <label
                onClick={async () => {
                  if (email) {
                    await sendPasswordResetEmail(email);
                    toast.success("Reset Email send");
                  } else {
                    toast.error("Email is requeued");
                  }
                }}
                className="label"
              >
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <small className="text-red-500">{eError?.message}</small>
              <input className="btn btn-accent" type="submit" value="Login" />
              <div className="flex justify-center items-center mt-2">
                <span>New to Doctors Portal?</span>
                <Link
                  to="/signup"
                  className="text-secondary ml-1 cursor-pointer"
                >
                  Create new account
                </Link>
              </div>
            </div>
            <div className="divider">OR</div>
            <button onClick={handelGoogleLogin} className="btn btn-outline">
              <FcGoogle className="text-3xl mr-5" /> CONTINUE WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
