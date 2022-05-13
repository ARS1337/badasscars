import React from "react";
import Animations from "../utils/Animations";

const windowHeight = window.innerHeight;

function FifthPage(props) {
  return (
    <div
      className="px-20  animate-secondPageBottomToTop fifth-page relative  "
      style={{ height: "85vh", width: "100%" }}
    >
      <div className="-mt-[10vh]">
        <label className="absolute left-[15%] -top-[3%] flex items-center justify-center text-9xl w-[80vw] tracking-auctionSpacing z-10 text-CorrectGrey font-extrabold font-oswald">
          AUCTION
        </label>
        <div className="flex items-center justify-center font-bold text-2xl z-10">
          <label className="z-10">CHAIR HALLS</label>
        </div>
        <div className="flex flex-row items-center justify-between pt-12">
          <div>
            <div className="border border-[#292F33] opa  h-0 w-24 z-10" />
          </div>
          <div>
            <img src="/assets/chairSmall.png" alt="chair" />
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/clock.png" alt="time to auction" />
            <div className="font-bold text-md">TIMED AUCTION</div>
          </div>
          <div>
            <img src="/assets/chairBig.png" alt="chairBig" />
          </div>
          <div className="w-20 z-10">
            <label className="z-10">4 DAYS 7 HOURS UNTIL</label>
          </div>
          <div className="z-10">
            <img src="/assets/chairSmall.png" alt="chair" className="z-10" />
          </div>
          <div className="z-10">
            <div className="border border-[#292F33] opa  h-0 w-24 z-10" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xs font-bold">Reserve price</div>
          <div className="font-bold text-lg py-2">1.390,00 USD</div>
          <div className="font-semibold text-sm bg-CorrectYellow mb-1">BID NOW</div>
          <div className="text-xs">Register to bid!</div>
        </div>
        <Animations
          key={12}
          height={windowHeight * 0.45}
          width={windowHeight * 0.45}
          positionTop={"5vh"}
          positionLeft={"70%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
      </div>
    </div>
  );
}

export default FifthPage;
