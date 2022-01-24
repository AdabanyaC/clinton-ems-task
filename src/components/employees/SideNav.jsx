import React from "react";
import dashboardIcon from "./../../assets/icons/dashboard.svg";
import usersIcon from "./../../assets/icons/users.svg";
import cardsIcon from "./../../assets/icons/cards.svg";

const SideNav = () => {
  return (
    <aside>
      <div className="bg-white w-24 h-screen sticky top-0">
        <img src={dashboardIcon} alt="Dashboard Icon" className="mt-10 p-8" />
        <img src={usersIcon} alt="Users Icon" className="p-8" />
        <img src={cardsIcon} alt="Cards Icon" className="p-8" />
      </div>
    </aside>
  );
};

export default SideNav;
