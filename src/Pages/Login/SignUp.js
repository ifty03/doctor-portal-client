import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../Shared/Spinner/Spinner";

const SignUp = () => {
  const [createUserWithEmailAndPassword, eUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  /* loading spinner */
  if (updating || loading || gLoading) {
    return <Spinner />;
  }

  const handelSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("user created successfully !");
    e.target.reset();
  };

  if (eUser) {
    console.log(" ", eUser);
  }

  /* googleLogin */
  const handelGoogleLogin = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  /* protacted page */

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="hero px-5 min-h-screen bg-base-100">
        <div className="card flex-shrink-0 w-full max-w-[455px] shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
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
                name="name"
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
                name="email"
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
                name="password"
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
              <small className="text-red-500">{eUser?.message}</small>
              <input className="btn btn-accent" type="submit" value="Sign Up" />
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
