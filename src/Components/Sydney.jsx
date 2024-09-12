import React from 'react';
import M from '../../public/assets/m.png';
import Span from '../../public/assets/span.png';

const Sydney = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left Section */}
        <div className="text-[#333333] w-full lg:w-1/2 space-y-6 lg:space-y-8">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl">Sydney</h1>
          <p className="text-base md:text-lg lg:text-xl">
            Capital of New South Wales and one of Australia's largest cities
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#333333]">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>Sydney, Australia - The complete Australian experience.</p>
            </div>
            <div className="flex items-center gap-2 text-[#333333]">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>We'll never stop loving Sydney and Melbourne</p>
            </div>
            <div className="flex items-center gap-2 text-[#333333]">
              <img className="w-6 h-6" src={M} alt="Icon" />
              <p>First up on your Sydney itinerary should be a visit</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="w-96 h-auto" src={Span} alt="Sydney" />
        </div>

      </div>

    
    </div>
  );
};

export default Sydney;
