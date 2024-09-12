import React from 'react';
import M from '../../public/assets/m.png';
import Right from '../../public/assets/right.png';

const Bagan = () => {
  return (
    <div className="flex justify-center items-center p-4 lg:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center">
        {/* Left Section */}
        <div className="text-[#333333] lg:w-1/2 space-y-6 lg:space-y-8">
          <div className="pt-8 lg:pt-36">
            <h1 className="font-medium text-2xl md:text-3xl">Bagan Myanmar</h1>
            <p className="pt-4">
              Myanmar is made up of thousands (yes, thousands) of Buddhist temples and pagodas. One of the prettiest views.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-start">
              <img src={M} alt="Icon" className="w-6 h-6 mt-1" />
              <p>The ancient city of Bagan is a Unesco World Heritage Site.</p>
            </div>
            <div className="flex gap-2 items-start">
              <img src={M} alt="Icon" className="w-6 h-6 mt-1" />
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="flex gap-2 items-start">
              <img src={M} alt="Icon" className="w-6 h-6 mt-1" />
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img src={Right} alt="Bagan Image" className="w-full  max-w-sm lg:w-3/4 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Bagan;
