import React from "react";
import Paris from "../../public/assets/paris.png";
import London from "../../public/assets/london.png";
import Captown from "../../public/assets/captown.png";
import Dubai from "../../public/assets/dubai.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Destination = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <div className="text-[#4475F2] font-medium">
            <h1 className="text-2xl md:text-2xl">DESTINASI FAVORIT</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-5">
            <h1 className="text-[#14183E] font-bold text-2xl md:text-4xl text-center md:text-left">
              ✈ • Find Your Favorite Destinations
            </h1>
            <button className="mt-4 md:mt-0 text-[#4475F2] flex items-center gap-2">
              See all <ArrowForwardIcon />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-7 pt-10">
            <img src={Paris} alt="Paris" className="w-40 md:w-56" />
            <img src={London} alt="London" className="w-40 md:w-56" />
            <img src={Captown} alt="Captown" className="w-40 md:w-56" />
            <img src={Dubai} alt="Dubai" className="w-40 md:w-56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
