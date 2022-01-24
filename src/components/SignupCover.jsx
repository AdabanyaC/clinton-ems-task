import React from "react";
import signupCoverImage from "./../assets/Bitmap.svg";

const SignupCover = () => {
  return (
    <div
      className="h-screen md:w-1/2 hidden lg:block"
      style={{
        background: `linear-gradient(180deg, rgba(57, 54, 54, 0.0001) 47.22%, rgba(0, 0, 0, 0.554688) 86.26%), url(${signupCoverImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center text-white h-screen flex justify-center items-end">
        <div>
          <h1 className="text-2xl font-medium">No Hazzles</h1>
          <p className="w-116 mt-4 m-auto text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <div className="mb-8">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio bg-green-500"
                  name="headerOne"
                />
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="headerTwo" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCover;
