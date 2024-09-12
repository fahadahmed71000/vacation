import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Secondnavbar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="navbar flex flex-col sm:flex-row sm:justify-between items-center pt-8">
        {/* Navbar items */}
        <div className="item flex flex-wrap gap-6 sm:gap-10 mb-4 sm:mb-0">
          <div className="text-center sm:text-left">Best Places</div>
          <div className="text-center sm:text-left">Mountain Places</div>
          <div className="text-center sm:text-left">Beach Places</div>
          <div className="text-center sm:text-left">Forest Places</div>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-auto">
          <input
            type="search"
            className="pl-10 h-10 w-full sm:w-80 focus:outline-none shadow-[1px_0px_18px_rgba(0,0,0,0.2)] rounded-md"
            placeholder="Search..."
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      <div className="pt-7">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default Secondnavbar;
