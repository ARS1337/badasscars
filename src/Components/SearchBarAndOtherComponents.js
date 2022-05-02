import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div class="rounded-full relative flex w-full flex-wrap items-stretch mb-3 border-2 border-solid border-CorrectBlack text-CorrectBlack">
      <input
        type="text"
        placeholder="Search _"
        class="rounded-full px-5 py-3 placeholder-slate-300 text-slate-600 relative bg-white text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
      />
      <span class="align-middle flex z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 right-4 pr-3 py-3">
        <FiSearch size={24} />
      </span>
    </div>
  );
};

function SearchBarAndOtherComponents(props) {
  return (
    <div className=" flex align-middle justify-end  w-full pt-4">
      <div className="flex align-middle justify-between  w-4/6">
        <div className="flex align-middle w-3/6">
          <SearchBar />
        </div>
        <div className="flex align-middle justify-between">
          <div>WISH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div>0.0 kmh</div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarAndOtherComponents;
