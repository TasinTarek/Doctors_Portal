import React from 'react';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
      
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
 
  const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
      if (user) {
        console.log(user );
      }

      let signInError;

      if (error || updateError) {
        signInError = (
          <span className="text-red-500 label-text ">{error.message}</span>
        );
      }
      if (loading  || updating) {
        return <Loading />;
      }
      const navigate = useNavigate
      const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name });
        await sendEmailVerification();
        console.log(data);
        console.log('Update Done');
        navigate('/appointment')
        
        
      };
       return (
      <div className="grid grid-cols-1 justify-items-center mt-40 w-max-lg ">
        <div class="card justify-center items-center flex-shrink-0 w-full max-w-sm shadow-xl bg-transparent">
          <div class="card-body">
            <h1 className="text-center text-2xl font-bold text-primary">
              SignUp
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="Mr. XXX"
                  class="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="text-red-500 label-text">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="text-red-500 label-text">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                      value: 6,
                      message: "Minimum 6 characters.",
                    },
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
              <div class="form-control mt-6 ">
                <button type="submit" className="btn ">
                  Sign Up
                </button>
               {signInError}
                <label class="label">
                  <a href="login" class="label-text-alt link link-hover">
                    Already Registered? Login
                  </a>
                </label>
              </div>
            </form>
          </div>

          <div className="divider">OR</div>
          <button
            onClick={() => createUserWithEmailAndPassword()}
            className="btn btn-ghost"
          >
            Google
          </button>
        </div>
      </div>
    );
};

export default SignUp;