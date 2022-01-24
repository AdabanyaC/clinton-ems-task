import React from "react";
import searchIcon from "./../../assets/icons/search.svg";
import chevronLeftIcon from "./../../assets/icons/chevron-left.svg";
import chevronRightIcon from "./../../assets/icons/chevron-right.svg";

const SearchAndFilter = () => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="relative text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm font-medium text-sm px-8 rounded py-2.5 mt-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-40"
      >
        Change Role
        {/* Dropdown Arrow */}
        <svg
          className="ml-2 w-4 h-4 absolute right-2 top-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <button
        type="button"
        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium text-sm px-8 rounded py-2.5 text-center mt-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Change
      </button>
      <div className="relative">
        <input
          type="text"
          className="border-gray-200 border-2 rounded focus:border-0 text-blue-900 block w-full pr-10 p-2.5 mt-4 mb-2 w-96"
          placeholder="Enter staff name here..."
        />
        <img
          src={searchIcon}
          alt="At Icon"
          className="absolute top-7 right-4"
        />
      </div>
      <div className="ml-auto self-center text-blue-900 flex gap-2">
        <p>1 of 2</p>
        <img src={chevronLeftIcon} alt="Chevron Left" />
        <img src={chevronRightIcon} alt="Chevron Right" />
      </div>
    </div>
  );
};

export default SearchAndFilter;
