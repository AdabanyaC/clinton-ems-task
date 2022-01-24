import React from "react";
import SignupCover from "../components/SignupCover";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="flex">
      <SignupCover />
      <SignupForm />
    </div>
  );
};

export default Signup;
