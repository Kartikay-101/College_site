import React from "react";
import logo from "../Assets/Images/logo.png";
import Banner from "./Banner";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-white text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>

                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
              </ul>
            </div>
            <img src={logo} alt="logo" className="h-10 rounded-full" />
            <a href="#" className="ml-1 text-2xl">
              College Navigator
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu text-lg menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
            </ul>
            <ul className="menu text-lg flex justify-end items-center text-right menu-horizontal px-1 ml-24">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  Register
                  <svg
                    width="22"
                    height="36"
                    viewBox="0 0 27 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M13.2359 22.5L7.82935 15H18.6424L13.2359 22.5Z"
                      fill="#1D1B20"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <Banner />
    </>
  );
}

export default Navbar;
