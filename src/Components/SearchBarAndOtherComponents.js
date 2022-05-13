import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import DelayLink from 'react-delay-link';

const SearchBar = () => {
  return (
    <div className="rounded-full relative flex w-full flex-wrap items-stretch mb-3 border-2 border-solid border-CorrectBlack text-CorrectBlack z-50">
      <input
        type="text"
        placeholder="Search _"
        className="rounded-full px-5 py-3 placeholder-slate-300 text-slate-600 relative bg-white text-sm border border-slate-300 outline-none focus:outline-none  w-full pr-10"
      />
      <span className="align-middle flex z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 right-4 pr-3 py-3">
        <FiSearch size={24} />
      </span>
    </div>
  );
};

function SearchBarAndOtherComponents(props) {
  const { searchBarAnimation, animateSecondHeader } = props;
  const searchBarClassList = " flex items-middle w-3/6 " + searchBarAnimation;
  let headerClassList = " flex items-middle justify-end  w-full pt-4 z-50";
  if (animateSecondHeader) {
    headerClassList += searchBarAnimation;
  }

  return (
    <div className={headerClassList}>
      <div className="flex items-middle justify-between  w-4/6">
        <div className={searchBarClassList}>
          <SearchBar />
        </div>

        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          className="hover:cursor-pointer z-50"
        >
          <div className="pr-2 hover:cursor-pointer font-bold">
            {/* <DelayLink to="/ThirdPage">WISH</DelayLink> */}
            <div>WISH</div>
          </div>
          <div>
            <img src="/assets/heart.png" alt="heart" className="h-4 w-4 hover:cursor-pointer" />
          </div>
          <div className="px-4 hover:cursor-pointer">|</div>
          <div className="px-4 hover:cursor-pointer  font-bold">0.0 KN</div>
          <div className="px-4 hover:cursor-pointer">
            <img src="/assets/bag.png" alt="heart" className="h-4 w-4 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarAndOtherComponents;
