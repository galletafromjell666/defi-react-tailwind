import React from 'react'

const AboutCard = ({icon, heading,text}) => {
  return (
    <div className=" rounded-2xl border-2 border-primaryBlue py-9 px-5 text-left">
      <div className="flex flex-col space-y-4">
        <div>
          <div className="bg-primaryBlue inline-block rounded-full p-2">
            <span className="text-2xl md:text-3xl">
                {icon}
                </span>
          </div>
        </div>
        <h3 className="text-xl font-bold">{heading}</h3>
        <p>{text}
        </p>
      </div>
    </div>
  );
}

export default AboutCard