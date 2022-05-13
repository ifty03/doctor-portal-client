import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const SignUp = () => {
  /* googleLogin */
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handelGoogleLogin = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
    console.log(user);
    console.log(error);
  };
  return (
    <div>
      <div className="hero px-5 min-h-screen bg-base-100">
        <div className="card flex-shrink-0 w-full max-w-[455px] shadow-2xl bg-base-100">
          <form className="card-body">
            <h3 className="text-[25px] font-semibold text-center mb-2">
              Sign Up
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                required
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
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Sign Up</button>
              <div className="flex justify-center items-center mt-2">
                <span>Already have an account? </span>
                <Link
                  to="/login"
                  className="text-secondary ml-1 cursor-pointer"
                >
                  Please login
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

export default SignUp;
