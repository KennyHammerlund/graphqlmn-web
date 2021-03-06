import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import CustomHR from "./CustomHR";

export default function SignUpForm({
  handleName,
  handlePhone,
  handleEmail,
  handleSubmit,
}) {
  return (
    <div className="bg-white shadow-2xl sm:rounded-lg py-6 px-2">
      <div className="text-center">
        <h4 className="self-center text-cyan-500">Register Yourself</h4>
        <h3 className="self-center text-pink-500 text-xl uppercase">
          Reserve Your Seat
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <form className="flex flex-col h-60 sm:flex sm:items-center flex-1">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="h-8 p-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-black rounded-md text-pink-500"
              placeholder="your name"
            />
          </div>
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="h-8 p-5 mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-black rounded-md text-pink-500"
              placeholder="123-456-7890"
            />
          </div>
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-8 p-5 mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-black rounded-md text-pink-500"
              placeholder="you@example.com"
            />
          </div>
          {/* sm:mt-0 sm:ml-3 */}
          <button
            type="submit"
            className="my-2 mt-12 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-pink-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
          >
            <FontAwesomeIcon className="mx-2" icon={faUserPlus} />
            Register Now
          </button>
        </form>
      </div>
      <div className="justify-center items-center w-full border-black">
        <CustomHR style={{ textAlign: "center" }} />
      </div>
    </div>
  );
}
