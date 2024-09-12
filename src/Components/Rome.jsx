import React from "react";
import M from "../../public/assets/m.png";
import Left from "../../public/assets/left.png";

const Rome = () => {
  return (
    <div className="flex justify-center items-center p-4 md:p-8 lg:p-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-12 pt-10 lg:pt-20">
          {/* Left Section */}
          <div className="flex justify-center lg:w-1/2">
            <img className="w-full h-auto max-w-sm" src={Left} alt="Left" />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center text-center lg:text-left text-[#333333] lg:w-1/2 space-y-6">
            <h1 className="font-medium text-2xl md:text-3xl">Rome</h1>
            <p className="text-base md:text-lg">
              Easily benchmark against local companies and create packages
              based on market data.
            </p>
            <div className="flex items-start gap-2">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>Analyse benefits package based on market data.</p>
            </div>
            <div className="flex items-start gap-2">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>Compare your benefits directly against the market.</p>
            </div>
            <div className="flex items-start gap-2">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>Design a package that meets employee expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rome;
