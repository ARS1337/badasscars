import React from "react";
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
  const { carDetails, currentCar, setcurrentCar } = props;
  const height = (window.innerHeight * 20) / 100;
  const width = (window.innerWidth * 50) / 100;

  const handleArrowClick = (direction) => {
    if (direction == "left") {
      if (currentCar > 0) {
        setcurrentCar(currentCar - 1);
      }
    } else {
      // direction== right
      if (currentCar < 2) {
        setcurrentCar(currentCar + 1);
      }
    }

    console.log("handleArrowClick ", direction);
  };

  if (carDetails) {
    return (
      <div
        className="flex justify-center align-middle w-full flex-col z-30 pt-14 "
        style={{
          alignItems: "center",
        }}
      >
        <div className=" flex align-middle justify-center flex-row  relative animate-ltr1 peer-active:  z-50">
          <img src={carDetails?.img} alt={carDetails?.name} height={height} width={width} className="z-20  " />
          <div
            className=" absolute text-white rounded-full h-24 w-24 bg-[#292F33] z-40 border-8 border-[#EEFF00] top-[50%] left-[40%] font-oswald 
          border-opacity-50 font-bold hover:opacity-50 hover:cursor-pointer"
          >
            <div className="flex align-middle justify-center  pt-7 ">
              <label className="">BUY NOW</label>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r from-blue-500-to-grey top-full  bg-CorrectBlack opacity-10 shadow-sm rounded-[20000%] w-11/12 h-6"></div>
        </div>
        <div className="pt-12">{carDetails?.header}</div>
        <div className="text-2xl font-bold">{carDetails?.name}</div>
        <div className="flex flex-row justify-between w-2/5">
          <div onClick={() => handleArrowClick("left")} className="z-30 button-left">
            <Arrows direction="left" />
          </div>
          <div>
            <div className="pb-4">{carDetails?.type}</div>
          </div>
          <div onClick={() => handleArrowClick("right")} className="z-30 button-right">
            <Arrows direction="right" />
          </div>
        </div>
        <div>{carDetails?.details.join(" | ")}</div>
      </div>
    );
  } else {
    return "loading cars...";
  }
}

export default Cars;
