import React from "react";
import AboutCard from "./AboutCard";
import { aboutData } from "../assets/data";
const About = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1240px] bg-black text-white text-center mx-auto py-16 px-4">
        <h1 className="py-4"> A Growing Protocol Ecosystem</h1>
        <p className="py-4 text-xl">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all
        </p>
        {/*Card container */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/*Card component*/}
          {aboutData.map((item) => {
            return <AboutCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
