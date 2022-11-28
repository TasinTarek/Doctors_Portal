import React from 'react';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

import {
 
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
;
const Login = () => {
  
  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
 
 const navigate = useNavigate();
 const location = useLocation();

 let from = location.state?.from?.pathname || "/";

 
 
 
    if(user || gUser){
    console.log(user || gUser);
    navigate(from, { replace: true });
  }

  


  let signInError;

  if(error || gError){
    signInError = (
      <span className="text-red-500 label-text ">{error.message}</span>
    );
  }
  if (loading || gLoading ) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);}
    return (
      <div className="grid grid-cols-1 justify-items-center mt-40 w-max-lg ">
        <div class="card justify-center items-center flex-shrink-0 w-full max-w-sm shadow-xl bg-transparent">
          <div class="card-body">
            <h1 className="text-center text-2xl font-bold text-primary">
              Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  aria-invalid={errors.email ? "true" : "false"}
                  type="text"
                  placeholder="email@gmail.com"
                  class="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Invalid Email Address",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 label-text">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-500 label-text">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="******"
                  class="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value:6,
                      message: "Minimum 6 characters."
                    }
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 label-text">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 label-text">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {signInError}
              <div class="form-control mt-6 ">
                <button type="submit" className="btn ">
                  Login
                </button>
                <label class="label">
                  <a href="signup" class="label-text-alt link link-hover">
                    New User?SignUp!
                  </a>
                </label>
              </div>
            </form>
          </div>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-ghost">
            Google
          </button>
        </div>
      </div>
    );
};

export default Login;