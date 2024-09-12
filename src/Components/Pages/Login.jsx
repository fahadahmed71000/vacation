import React from 'react';
import L from '../../../public/assets/login.png';
import Google from '../../../public/assets/google.png';
import Fb from '../../../public/assets/fb.png';
import Apple from '../../../public/assets/apple.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center lg:justify-start">
        <img className="w-full max-w-lg" src={L} alt="Login" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Hello! Welcome Back</h2>
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
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-900" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-blue-500 w-full max-w-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
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
            <Link to='/signup'>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Don't Have An Account? Create Account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
