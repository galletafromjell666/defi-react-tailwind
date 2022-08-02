import React from "react";

export const Subscribe = () => {
  return (
    <div className="w-full h-auto bg-black text-white text-center">
      <div className=" flex flex-col items-center px-3 md:px-10 py-10">
        <h1>Join our DeFi Community</h1>

        <div className="flex flex-row items-center space-x-4 mt-6">
          <div className="">
            <input
              className="py-3 px-7 rounded-full w-full"
              type="email"
              placeholder="Enter yor email"
            />
          </div>
          <div>
            <button className="main-button text-white w-[115px] md:w-auto">Sign Up</button>
          </div>
        </div>
        <div className="flex flex-row items-center  my-4 space-x-2">
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            defaultChecked={true}
          />
          <p>Yes, I agree to receive email communications from DeFi</p>
        </div>
      </div>
    </div>
  );
};
