import React from "react";

const Button = ({ btnValue }) => {
  return (
    <button
      type="button"
      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium text-sm px-16 py-2.5 text-center mt-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {btnValue}
    </button>
  );
};

export default Button;
