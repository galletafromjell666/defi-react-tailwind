import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] grid grid-cols-2 gap-y-6  mx-auto bg-black py-10 lg:grid-cols-5 md:gap-y-0">
        <div>
          <h3 className="font-bold text-xl border-b-4 border-primaryBlue inline-block">
            Products
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token Lists</li>
            <li>Defi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-primaryBlue inline-block">
            Media
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token Lists</li>
            <li>Defi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-primaryBlue inline-block">
            Enterprise
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token Lists</li>
            <li>Defi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-primaryBlue inline-block">
            News
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token Lists</li>
            <li>Defi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-primaryBlue inline-block">
            Support
          </h3>
          <ul>
            <li>App</li>
            <li>Analytics</li>
            <li>Token Lists</li>
            <li>Defi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
