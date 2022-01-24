import React from "react";
import Button from "../Button";

const SectionCaption = () => {
  return (
    <div className="flex justify-between mt-12">
      <h3 className="text-blue-900 font-medium text-2xl self-center">
        Employees
      </h3>
      <Button btnValue={"Add New"} />
    </div>
  );
};

export default SectionCaption;
