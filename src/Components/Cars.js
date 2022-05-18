import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Arrows = (props) => {
  const { direction } = props;

  return (
    <div className="h-6 w-6 md:h-8 lg:h-8 md:w-8 lg:w-8 z-30 rounded-full  border border-CorrectBlack flex items-center justify-center hover:opacity-60 hover:cursor-pointer">
      {direction == "left" ? <MdArrowLeft size={25} /> : <MdArrowRight size={25} />}
    </div>
  );
};

function Cars(props) {
  const {
    carClassList,
    setNewClass,
    carDetails,
    currentCar,
    noOfCars,
    setcarClassList,
    leftTyreAnimation,
    rightTyreAnimation,
    buyNowClassList,
  } = props;

  const height = (window.innerHeight * 25) / 100;
  const width = (window.innerWidth * 40) / 100;

  const handleArrowClick = (direction) => {
    if (direction == "left") {
      if (currentCar > 0) {
        setNewClass("animate-rtl2", "animate-rtl1", currentCar - 1, 1000, setcarClassList, "left");
      }
    } else if (direction == "right") {
      if (currentCar < noOfCars) {
        setNewClass("animate-ltr2", "animate-ltr1", currentCar + 1, 1000, setcarClassList, "right");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[50vh] bg-newGrey  md:h-[70vh] " key={carDetails?.id}>
      <div className="flex justify-center items-center w-full flex-col z-50   ">
        <div className={carClassList}>
          <img src={carDetails?.img} alt={carDetails?.name} height={height} width={width} className="z-20  " />
          <div className={buyNowClassList}>
            <div className="flex items-center justify-center hover:cursor-pointer ">
              <label className="hover:cursor-pointer text-[8px] md:text-base pl-2 md:pl-0">BUY NOW</label>
            </div>
          </div>
          <img
            src="/assets/tyre.png"
            alt="car tyre"
            height={"20%"}
            width={"20%"}
            className={leftTyreAnimation}
            key={carDetails?.id + carClassList + "left"}
          />

          <img
            src="/assets/tyre.png"
            alt="car tyre"
            height={"20%"}
            width={"20%"}
            className={rightTyreAnimation}
            key={carDetails?.id + carClassList + "right"}
          />
          <div className="absolute bg-gradient-to-r from-blue-500-to-grey top-[90%] md:top-full lg:top-full   bg-CorrectBlack opacity-10 shadow-sm rounded-[20000%] w-[110%] md:w-[110%] lg:w-[110%] h-3 md:h-6 lg:h-6 z-50"></div>
        </div>
        <div className="pt-2 md:pt-8 lg:pt-8 text-sm font-bold pb-1 md:pb-2 lg:pb-2">
          {carDetails?.header?.toUpperCase()}
        </div>
        <div className="text-3xl font-bold pb-1 md:pb-1 lg:pb-1">{carDetails?.name}</div>
        <div
          className="flex flex-row items-center justify-between w-[100vw] md:w-4/5 lg:w-4/5 px-2 pb-1 "
          key={carDetails.id+"arrowlist"}
        >
          <div
            onClick={() => handleArrowClick("left")}
            className={currentCar == 0 ? "z-30 invisible px-2 " : "visible px-2"}
            key={carDetails?.id + "arrowLeft"}
          >
            <Arrows direction="left" />
          </div>
          <div>
            <div className="w-full">{carDetails?.type}</div>
          </div>
          <div
            onClick={() => handleArrowClick("right")}
            className={currentCar + 1 == noOfCars ? "z-30 invisible px-2" : "visible px-2"}
            key={carDetails?.id + "arrowRight"}
          >
            <Arrows direction="right" />
          </div>
        </div>
        <div className="text-xs md:text-sm font-semibold flex flex-col items-center justify-center md:flex-row pt-2">
          {carDetails?.details.map((detail, key) => (
            <div key={key}>
              <div className="block md:hidden lg:hidden pb-0.5 md:pb-1 lg:pb-1 text-xs">{detail} </div>
              <div className="hidden md:block lg:block pb-0.5 md:pb-1 lg:pb-1">
                {key != 0 ? "| " + detail + "  " : " " + detail + "  "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
