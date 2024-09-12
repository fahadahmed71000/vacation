import React from "react";
import Cr from "../../../public/assets/cr.png";
import Google from "../../../public/assets/google.png";
import Fb from "../../../public/assets/fb.png";
import Apple from "../../../public/assets/apple.png";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex-1 flex items-center justify-center lg:justify-start p-4">
        <img className="w-full max-w-md" src={Cr} alt="Signup" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Or Mobile Number
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-blue-500 w-full max-w-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registration
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-600">-OR-</span>
          </div>
          <div className="flex justify-center items-center mt-4 gap-4">
            <img className="w-8 h-8" src={Google} alt="Google" />
            <img className="w-8 h-8" src={Fb} alt="Facebook" />
            <img className="w-8 h-8" src={Apple} alt="Apple" />
          </div>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
