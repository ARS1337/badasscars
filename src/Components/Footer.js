import React from "react";
import configs from "../config";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

function Footer(props) {
  const { currentCar } = props;
  const currentCarString = currentCar > 9 ? currentCar+1 : `0${currentCar+1}`;
  console.log(
    "currentCar",
    currentCar,
    " currentCar type ",
    typeof currentCar,
    " currentCar > 9 ",
    currentCar > 9,
    " currentCarString ",
    currentCarString
  );

  return (
    <div
      className="px-8 font-oswald"
      style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
    >
      <div className=" flex align-bottom flex-row justify-around w-36">
        <div className="h-8 w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-2 hover:cursor-pointer hover:opacity-50">
          <TiSocialFacebook />
        </div>
        <div className="h-8 w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-2 hover:cursor-pointer hover:opacity-50">
          <FaInstagram />
        </div>
        <div className="h-auto w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-1 hover:cursor-pointer hover:opacity-50" >
          <img src="/assets/youtube.png" alt="youtube icon" className="h-5 w-5"  />
        </div>
      </div>
      <div>PAYMENT BY COD, INTERNET BANKING OR CARD</div>
      <div className="font-oswald font-semibold">
        <label className="text-9xl font-semibold text-CorrectBlack">{currentCarString}</label>
        <sup className="absolute bottom-6 font-normal">/0{configs.carList.length}</sup>
      </div>
    </div>
  );
}

export default Footer;
