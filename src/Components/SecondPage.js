import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import configs from "../config";
import Animations from "../utils/Animations";
import debounce from "../utils/debounce";
import ScrollContext from "../utils/ScrollContext";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const CarDetails = (props) => {
  const classListCarDetails = `z-2 h-36 w-36  flex align-middle justify-center flex-col`;
  return (
    <div className="z-50 pt-16   flex align-middle justify-center flex-col  px-1 ">
      <div className="  border-CorrectBlack bg-CorrectGrey">
        <img src="/assets/carDetails.png" alt="car details" />
      </div>
      <div className="border border-t-0 border-CorrectBlack bg-CorrectGrey">
        <div className="flex align-middle justify-center font-oswald text-2xl py-4"> {props.details.name}</div>
        <div className="flex align-middle justify-center font-oswald text-sm pb-4">
          <div className="px-2 bg-CorrectYellow">1.390.00 KN</div>
        </div>
      </div>
    </div>
  );
};

function SecondPage(props) {

  return (
    <div
      className="p-12 relative font-roboto w-full h-full flex align-center justify-center flex-col bg-CorrectGrey"
      style={{ height: "100vh", width: "100%" }}
    >
      <div className=" flex align-middle justify-center font-oswald font-bold tracking-title z-10">
        THE BEST FROM THE OFFER
      </div>
      <div className="flex align-middle justify-center flex-col px-24 sm:flex-row">
        {configs.carList.map((details) => (
          <div key={details.id} className="px-2 z-10">
            <CarDetails details={details} />
          </div>
        ))}
      </div>
      <div className=" flex align-middle justify-center font-oswald font-bold tracking-title z-10 hover:cursor-pointer pt-12 hover:opacity-50">
        REVIEW THE ENTIRE OFFER
      </div>

      <Animations
        key={12}
        height={40}
        width={40}
        positionTop={"80vh"}
        positionLeft={"10%"}
        animationClassList="animate-rotate animate-bounceCustom z-0"
      />
      <Animations
        key={13}
        height={150}
        width={150}
        positionTop={"25vh"}
        positionLeft={"25%"}
        animationClassList="animate-rotate animate-bounceCustom z-0"
      />
      <Animations
        key={14}
        height={200}
        width={200}
        positionTop={"25vh"}
        positionLeft={"80%"}
        animationClassList="animate-rotate animate-bounceCustom z-0"
      />
    </div>
  );
}

export default SecondPage;
