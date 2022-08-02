import React, { useState,useEffect } from "react";

import heroVid from "../assets/video.mp4"
const Hero = () => {
  const [amount, setAmount] = useState(42104783662.44);
  useEffect(()=>{
    const timer = setInterval(()=>{
      setAmount((prevAmount) => prevAmount * 1.00000000001);
    },1000);
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div className="w-full h-[90vh] relative">
      <video
        className="object-cover h-full w-full absolute -z-40"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center  items-center space-y-3 text-white px-4">
        <h1>Decentralized</h1>
        <h1>
          <span className="text-primaryBlue">Trading</span> Protocol
        </h1>
        <p className="text-xl my-2 text-center">
          Guaranteed liquidity trading for million of users and top Ethereum
          applications.
        </p>
        <div className="flex flex-row space-x-4 my-2">
          <button className="main-button text-white">Use Defi</button>

          <button className="transparent-button">FAQ</button>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-white text-xl text-center font-bold mx-4">
          Total Volume Secured: ${amount.toLocaleString("en-US")}
        </p>
      </div>
      <p>uwuw</p>
    </div>
  );
};

export default Hero;
 