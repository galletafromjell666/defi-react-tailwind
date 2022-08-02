import React from "react";
import terminal from '../assets/terminal.png'
const Developers = () => {
  return (
    <div className="w-full h-auto bg-black text-center text-white md:text-left">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-between space-y-4 bg-black px-10 py-10 md:flex-row md:space-x-4 md:space-y-0">
        <div className="md:px-6">
          <h1>Superpowers for DEFI developers.</h1>
          <p className="py-4 md:pt-4">
            Checkout the <span className="text-primaryBlue">documentation</span>
            , the <span className="text-primaryBlue">quick start</span> or a
            guide below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div>
          <div>
            <img
              className="max-w-[250px] mx-auto md:max-w-[390px] shadow-lg shadow-cyan-500/50"
              src={terminal}
              alt="terminal img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
