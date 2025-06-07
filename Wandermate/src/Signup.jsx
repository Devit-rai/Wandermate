import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited", formdata);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  return (
    <>
    <div className="flex items-center justify-center w-full h-screen ">
    <div className="flex items-center justify-center w-5/6 shadow-xl " >
      <form onSubmit={handleSubmit} className="w-1/2 ">
        <div className="h-350 w-5/6 ml-14 mt-14 p-4">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold mb-6 flex items-center justify-center">Sign up</h1>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formdata.username}
              id="name"
              placeholder="Enter name"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              id="email"
              placeholder="Enter email"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formdata.password}
              id="password"
              placeholder="Enter password"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirm"
              onChange={handleChange}
              value={formdata.confirm}
              id="confirm"
              placeholder="Confirm password"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign up
            </button>
            <div className="flex items-center justify-center text-sm">
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600">
                {" "}
                I agree to all{" "}
                <span className="text-blue-600">Terms and Conditions</span>
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center ">
          <img src="src\assets\undraw_signup.svg" alt="" />
          <p className="p-5">Already a member? <span className="text-blue-500"><Link to="/signin">Sign in</Link></span></p>
        </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
