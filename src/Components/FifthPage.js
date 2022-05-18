import React from "react";
import Animations from "../utils/Animations";

const windowHeight = window.innerHeight;

function FifthPage(props) {
  return (
    <div
      className=" px-20 h-full pb-8 md:pb-0 md:h-[100vh] w-full  font-oswald fifth-page pt-8 md:pt-24  lg:pt-0 flex items-start md:items-center justify-center "
    >
      <div className="relative  w-full ">
        <label className="absolute top-[5%] opacity-50 left-[0%] tracking-spacing md:left-[15%] md:-top-[5%] flex items-center justify-center text-5xl md:text-[12rem] w-full md:w-[80vw] md:tracking-auctionSpacing z-10 text-CorrectGrey font-extrabold font-oswald">
          AUCTION
        </label>
        <div className="flex items-center justify-center font-semibold text-2xl z-10">
          <label className="z-10 text-6xl">CHAIR HALLS</label>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-12">
          <div>
            <div className="border border-[#292F33] opa  h-0 w-24 z-10 hidden md:block" />
          </div>
          <div>
            <img src="/assets/chairSmall.png" alt="chair" className="hidden md:block" />
          </div>
          <div className=" flex-col items-center hidden md:flex">
            <img src="/assets/clock.png" alt="time to auction" />
            <div className="font-bold text-md">TIMED AUCTION</div>
          </div>
          <div>
            <img src="/assets/chairBig.png" alt="chairBig" />
          </div>
          <div className="w-20 z-10">
            <label className="z-10 ">4 DAYS 7 HOURS UNTIL</label>
          </div>
          <div className="z-10">
            <img src="/assets/chairSmall.png" alt="chair" className="z-10 hidden md:block" />
          </div>
          <div className="z-10">
            <div className="border border-[#292F33] opa  h-0 w-24 z-10 hidden md:block" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xs md:text-lg font-semibold">Reserve price</div>
          <div className="font-bold text-lg md:text-xl py-2">1.390,00 USD</div>
          <div className="font-semibold text-sm bg-CorrectYellow mb-1">BID NOW</div>
          <button className="text-sm md:text-lg">Register to bid!</button>
        </div>
        <div>
          <div className="block md:hidden lg:hidden"></div>

          <div className="hidden md:block lg:block">
            <Animations
              key={12}
              height={0.3}
              width={0.3}
              positionTop={"-5vh"}
              positionLeft={"70%"}
              animationClassList="animate-rotate animate-bounceCustom z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
