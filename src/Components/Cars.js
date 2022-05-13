import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Arrows = (props) => {
  const { direction } = props;

  return (
    <div className="h-9 w-9 pt-1 z-30 rounded-full  border border-CorrectBlack flex align-middle justify-center hover:opacity-60 hover:cursor-pointer">
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
    setbuyNowClassList,
    buyNowClassList,
    leftTyreAnimation,
    rightTyreAnimation,
  } = props;

  const height = (window.innerHeight * 20) / 100;
  const width = (window.innerWidth * 50) / 100;

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

  if (carDetails) {
    return (
      <div
        className="flex justify-center align-middle w-full flex-col z-50 pt-14 "
        style={{
          alignItems: "center",
        }}
      >
        <div className={carClassList}>
          <img src={carDetails?.img} alt={carDetails?.name} height={height} width={width} className="z-20  " />
          <div className={buyNowClassList}>
            <div className="flex align-middle justify-center  pt-7 hover:cursor-pointer ">
              <label className="hover:cursor-pointer ">BUY NOW</label>
            </div>
          </div>
          <img
            src="/assets/tyre.png"
            alt="car tyre"
            height={"20%"}
            width={"20%"}
            className={leftTyreAnimation}
            key={carClassList+'left'}
          />
   
          <img
            src="/assets/tyre.png"
            alt="car tyre"
            height={"20%"}
            width={"20%"}
            className={rightTyreAnimation}
            key={carClassList+"right"}
          />
          <div className="absolute bg-gradient-to-r from-blue-500-to-grey top-full  bg-CorrectBlack opacity-10 shadow-sm rounded-[20000%] w-[110%] h-6 z-50"></div>
        </div>
        <div className="pt-12 text-base font-bold">{carDetails?.header?.toUpperCase()}</div>
        <div className="text-3xl font-bold">{carDetails?.name}</div>
        <div className="flex flex-row justify-between w-2/5">
          <div onClick={() => handleArrowClick("left")} className={currentCar == 0 ? "z-30 invisible" : "visible"}>
            <Arrows direction="left" />
          </div>
          <div>
            <div className="pb-4">{carDetails?.type}</div>
          </div>
          <div
            onClick={() => handleArrowClick("right")}
            className={currentCar + 1 == noOfCars ? "z-30 invisible" : "visible"}
          >
            <Arrows direction="right" />
          </div>
        </div>
        <div className="text-base font-semibold">{carDetails?.details.join(" | ")}</div>
      </div>
    );
  } else {
    return "loading cars...";
  }
}

export default Cars;
