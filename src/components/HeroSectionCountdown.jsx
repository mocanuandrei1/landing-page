import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = Math.max(targetDate.getTime() - new Date().getTime(), 0);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-[-1px] flex items-center justify-evenly md:justify-center md:gap-10 bg-energy-pink flex-wrap">
      <div className="flex flex-col p-2 justify-center items-center text-white border-4 m-2 rounded-lg">
        <span className="text-sm font-bold min-[320px]:text-2xl md:text-2xl lg:text-4xl">
          {timeLeft.days}
        </span>
        <span>ZILE</span>
      </div>
      <div className="flex flex-col p-2 justify-center items-center text-white border-4 m-2 rounded-lg">
        <span className="text-sm font-bold min-[320px]:text-2xl md:text-2xl lg:text-4xl">
          {timeLeft.hours}
        </span>
        <span>ORE</span>
      </div>
      <div className="flex flex-col p-2 justify-center items-center text-white border-4 m-2 rounded-lg">
        <span className="text-sm font-bold min-[320px]:text-2xl md:text-2xl lg:text-4xl">
          {timeLeft.minutes}
        </span>
        <span>MINUTE</span>
      </div>
      <div className="flex flex-col p-2 justify-center items-center text-white border-4 m-2 rounded-lg">
        <span className="text-sm font-bold min-[320px]:text-2xl md:text-2xl lg:text-4xl">
          {timeLeft.seconds}
        </span>
        <span>SECUNDE</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
