import React from 'react';
import S1 from '../../../public/assets/s1.png';
import S2 from '../../../public/assets/s2.png';
import S3 from '../../../public/assets/s3.png';
import S4 from '../../../public/assets/s4.png';

const Slider = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="w-full max-w-7xl bg-[#6FA9DA] p-6 md:p-10 mx-auto rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-5 text-black">Suggestion For You</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative w-64 h-96 rounded-md overflow-hidden shadow-lg">
            <img src={S1} alt="Yamanashi, Japan" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-white text-gray-900 font-bold">
              Yamanashi, Japan
            </div>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div className="relative w-64 h-96 rounded-md overflow-hidden shadow-lg">
            <img src={S2} alt="Kuang Si Falls, Laos" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-white text-gray-900 font-bold">
              Kuang Si Falls, Laos
            </div>
          </div>
          <div className="relative w-64 h-96 rounded-md overflow-hidden shadow-lg">
            <img src={S3} alt="Lapland, Finland" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-white text-gray-900 font-bold">
              Lapland, Finland
            </div>
          </div>
          <div className="relative w-64 h-96 rounded-md overflow-hidden shadow-lg">
            <img src={S4} alt="The Pitons" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-white text-gray-900 font-bold">
              The Pitons
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
