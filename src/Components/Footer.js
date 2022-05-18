import React from "react";
import configs from "../config";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

function Footer(props) {
  const { currentCar, paymentAnimation, carListingNoAnimation, smAnimation } = props;
  const currentCarString = currentCar > 9 ? currentCar + 1 : `0${currentCar + 1}`;
  const paymentClassListAnimation =
    paymentAnimation +
    " footer z-40 font-light md:font-normal lg:font-normal w-3/6   text-xs md:text-sm md:w-full md:flex md:justify-center text-center";
  const carListingNoClassListAnimation =
    carListingNoAnimation + " footer font-oswald font-semibold z-40 self-start flex items-center justify-end";
  const smAnimationClassList = " footersm flex align-bottom flex-row justify-around md:w-36 lg:w-36 z-40 " + smAnimation;

  return (
    <div className="  font-normal px-2 md:px-8 lg:px-8 font-oswald md:fixed md:bottom-0 pb-1  w-full  z-50 flex items-end justify-between">
      <div className={smAnimationClassList}>
        <div className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 rounded-full mr-1 border border-[#74787B] flex items-center justify-center  hover:cursor-pointer hover:opacity-50">
          <TiSocialFacebook />
        </div>
        <div className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 rounded-full mr-1 border border-[#74787B] flex items-center  justify-center  hover:cursor-pointer hover:opacity-50">
          <FaInstagram />
        </div>
        <div className="h-auto w-7 md:h-auto md:w-8 lg:h-auto lg:w-8 mr-1 rounded-full border border-[#74787B] flex items-center justify-center  hover:cursor-pointer hover:opacity-50">
          <img src="/assets/youtube.png" alt="youtube icon" className="h-4 w-4" />
        </div>
      </div>
      <div className={paymentClassListAnimation}>PAYMENT BY COD, INTERNET BANKING OR CARD</div>
      <div className={carListingNoClassListAnimation}>
        <label className="text-4xl md:text-9xl lg:text-9xl font-semibold text-CorrectBlack pt-1">
          {currentCarString}
        </label>
        <sup className="absolute  font-normal text-xs">/0{configs.carList.length}</sup>
      </div>
    </div>
  );
}

export default Footer;
