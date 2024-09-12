import React from "react";
import Hero from '../../public/assets/hero.png';

const Content = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around w-full items-center p-6 lg:p-12">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 xl:w-1/3 space-y-6 lg:space-y-8">
        <div className="rounded-2xl bg-[#E5EDFF] text-[#4F7DF3] py-2 px-4 max-w-xs w-full">
          <button className="font-medium">
            ✈ • Explore the wonderful World
          </button>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Vacation & enjoy{" "}
          <span className="text-[#4475F2]">new place</span> in the World🏝
        </h1>
        <p className="text-[#5E6282]">
          Destinize keeps you updated regarding new holiday destinations in
          Indonesia by following the developments of influencers on social
          media.
        </p>
        <button className="rounded-md px-8 py-3 bg-[#4475F2] text-white">
          Start Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:w-1/2 xl:w-2/5 mb-8 lg:mb-0">
        <img className="w-full max-w-xs md:max-w-sm lg:max-w-none" src={Hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Content;
