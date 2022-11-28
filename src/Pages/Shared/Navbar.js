import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignOut } from "react-firebase-hooks/auth";
import Loading from './Loading';

const Navbar = () => {
const [user, loading, error] = useAuthState(auth);
const [signOut] = useSignOut(auth);
if(loading){
  return <Loading/>
}
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/appointment">Appointment</a>
            </li>
            <li>
              <a href="reviews">Reviews</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/appointment">Appointment</a>
          </li>
          <li>
            <a href="reviews">Reviews</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
          className='btn btn-primary'
            onClick={async () => {
              const success = await signOut();
              if (success) {
                alert("You are sign out");
              }
            }}
          >
            Sign Out
          </button>
        ) : (
          <a href="login" className="btn">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;