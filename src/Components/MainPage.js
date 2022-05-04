import React, { Suspense, useState } from "react";
import Animations from "../utils/Animations";
import Header from "./Header";
import SearchBarAndOtherComponents from "./SearchBarAndOtherComponents";
import StickyNotificationAtTop from "./StickyNotificationAtTop";
import Cars from "./Cars";
import configs from "../config";
import Footer from "./Footer";

function MainPage(props) {
  const [currentCar, setcurrentCar] = useState(0);
  return (
    <div className=" min-h-screen z-[1] ">
      <StickyNotificationAtTop />
      <div className="px-8 z-50">
        <Header />
        <SearchBarAndOtherComponents />
      </div>
      <div className="z-[2]">
        <Cars carDetails={configs?.carList[currentCar]} key={currentCar}  setcurrentCar={setcurrentCar} currentCar={currentCar}/>
        <Animations height={170} width={170} positionTop={"50%"} positionLeft={"78%"} />
        <Animations height={50} width={50} positionTop={"30%"} positionLeft={"60%"} />
        <Animations height={350} width={350} positionTop={"25%"} positionLeft={"12%"} />
        <div className="absolute bottom-8  w-full max-h-xs">
          <Footer currentCar={currentCar}/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
