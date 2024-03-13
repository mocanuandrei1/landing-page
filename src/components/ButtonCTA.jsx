import React from "react";

const ButtonCTA = (props) => {
  return (
    <div className="text-center my-10 mx-5">
      <a href="#redirectButtonLanding">
        <button className="lg:w-[500px] md:w-full sm:w-full px-4 py-5  md:px-6 md:py-4 bg-energy-blue text-white rounded-3xl font-['Jost-Bold'] text-xl md:text-2xl sm:text-2lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {props.text}
        </button>
      </a>
    </div>
  );
};

export default ButtonCTA;
