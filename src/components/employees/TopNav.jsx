import React from "react";
import logo from "./../../assets/logo.svg";
import avatar from "./../../assets/employees/avatar.jpg";
import arrowDown from "./../../assets/icons/arrow-down.svg";

const TopNav = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-white p-3 flex justify-between">
        <div>
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="flex gap-2">
          <img src={avatar} alt="" className="h-10 w-10 rounded-full" />
          <div className="self-center flex gap-2">
            <p className="text-blue-900 text-sm">Hi, Joshua</p>
            <img src={arrowDown} alt="Arrow Down" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
