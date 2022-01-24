import React from "react";
import EmployeeInfo from "../components/employees/EmployeeInfo";
import EmployeeTable from "../components/employees/EmployeeTable";
import SearchAndFilter from "../components/employees/SearchAndFilter";
import SectionCaption from "../components/employees/SectionCaption";
import SideNav from "../components/employees/SideNav";
import TopNav from "../components/employees/TopNav";

const Employees = () => {
  return (
    <div>
      <TopNav />
      <div className="flex">
        <SideNav />
        <div className="w-full bg-gray-50 px-12">
          <SectionCaption />
          <EmployeeInfo />
          <SearchAndFilter />
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Employees;
