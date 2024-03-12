import React from "react";
import { Blockquote } from "flowbite-react";
import { useLocation } from "react-router-dom";
import CheckIcon from "../assets/icons/check-icon.svg?react";

const ThankYou = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col flex-nowrap items-center justify-center h-[90vh] gap-5">
      <div>
        <h1 className="text-4xl text-center text-energy-blue">
          MULȚUMIM PENTRU CERERE!
        </h1>
      </div>
      <CheckIcon />
      <div class="text-center">
        <p className="text-lg">
          Cererea ta a fost &icirc;nregistrată cu urmatoarele informatii:
        </p>
        <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          <p>Nume si prenume: {location.state.name}</p>
          <p>E-mail: {location.state.email}</p>
          <p>Numar de telefon: {location.state.number}</p>
          <p>
            De unde ati aflat de noi:{" "}
            {location.state.socialmedia.map((element) => {
              return <p>{element}</p>;
            })}
          </p>
        </Blockquote>
        <p className="text-xl">
          Apreciem interesul și timpul acordat, o să vă contactăm&nbsp;&icirc;n
          cel mai scurt timp posibil.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;