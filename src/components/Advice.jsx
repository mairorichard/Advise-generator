import React, { useState } from "react";
import Ldivider from "../assets/pattern-divider-desktop.svg";
import Sdivider from "../assets/pattern-divider-mobile.svg";
import Dice from "../assets/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [num, setNum] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setAdvice(data.slip.advice);
      setNum(data.slip.id);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  fetchData();

  return (
    <div className="bg-[#323a49] px-6 py-10 rounded-2xl mx-4 lg:w-[60%] flex flex-col">
      <div className="flex flex-col items-center justify-center gap-9">
        {/* Advice number */}
        <div className="">
          <p className="text-[#52ffa8] text-sm">ADVICE # {num}</p>
        </div>
        {/* /Advice number */}

        {/* main */}

        <div className="text-[#cee3e9] font-medium text-3xl max-h-[300px]  text-center">
          {isLoading ? (
            <p className="text-sm">Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <p>{advice}</p>
          )}
        </div>
        {/* /main */}

        {/* Dividers */}
        <div className="">
          <div className="block lg:hidden">
            <img src={Sdivider} alt="" />
          </div>
          <div className="hidden lg:block">
            <img src={Ldivider} alt="" />
          </div>
        </div>
        {/* /Dividers */}
      </div>

      {/* fetch button */}
      <div className="flex self-center mt-6">
        <div
          onClick={() => {
            setIsLoading(true);
            fetchData;
          }}
          className="grid place-items-center p-3 bg-[#52ffa8] rounded-full btn-shadow cursor-pointer"
        >
          <img src={Dice} alt="" />
        </div>
      </div>
      {/* /fetch button */}
    </div>
  );
};

export default Advice;
