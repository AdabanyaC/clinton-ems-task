import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "./../assets/icons/user.svg";
import aatIcon from "./../assets/icons/aat.svg";
import eyeIcon from "./../assets/icons/eye.svg";

const SignupForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  console.log("Loading 1", loading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/01ee6cc8deb14c6c9795288854189484"
      );
      console.log(response);
      navigate("/employees");
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setLoading(!loading);
    console.log("Loading 3", loading);
  };

  return (
    <form className="p-20 w-full lg:w-1/2" onSubmit={handleSubmit}>
      <div className="text-center lg:text-left">
        <h1 className="text-3xl text-cyan-900">Create your Free Account</h1>
        <p className="mt-2 text-cyan-900">
          Already registered?{" "}
          <NavLink to="/sign-in" className="text-green-500">
            Sign In
          </NavLink>{" "}
        </p>
      </div>

      <div className="bg-white shadow-2xl p-8 rounded mt-8">
        {/* Show Error */}
        {error && (
          <div className="mt-4 bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800">
            {error.message}
          </div>
        )}
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            <label className="block mt-4 text-sm text-gray-500">
              First Name
            </label>
            <div className="relative bg-blue-500">
              <input
                type="text"
                className="border-gray-300 border-0 border-b-2 focus:border-0 text-blue-900 block w-full pr-10 p-2.5"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <img
                src={userIcon}
                alt="User Icon"
                className="absolute top-2 right-2"
              />
            </div>
          </div>
          <div>
            <label className="block mt-4 text-sm text-gray-500">
              Last Name
            </label>
            <div className="relative bg-blue-500">
              <input
                type="text"
                className="border-gray-300 border-0 border-b-2 focus:border-0 text-blue-900 block w-full pr-10 p-2.5"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <img
                src={userIcon}
                alt="User Icon"
                className="absolute top-2 right-2"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block mt-4 text-sm text-gray-500">Email</label>
          <div className="relative bg-blue-500">
            <input
              type="text"
              className="border-gray-300 border-0 border-b-2 focus:border-0 text-blue-900 block w-full pr-10 p-2.5"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img
              src={aatIcon}
              alt="At Icon"
              className="absolute top-2 right-2"
            />
          </div>
        </div>
        <div>
          <label className="block mt-4 text-sm text-gray-500">Password</label>
          <div className="relative bg-blue-500">
            <input
              type={showPassword ? `text` : `password`}
              placeholder="*********"
              className="border-gray-300 border-0 border-b-2 focus:border-0 text-blue-900 block w-full pr-10 p-2.5"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={eyeIcon}
              alt="Eye Icon"
              className="absolute top-2 right-2"
              onClick={handleShowPassword}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium text-sm px-16 py-2.5 text-center mt-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
