import React, { useState } from "react";
import { FiHeart, FiSearch } from "react-icons/fi";
import config from "../config";
import debounce from "../utils/debounce";

const DeviceDetails = (props) => {
  const [hover, sethover] = useState(false);
  const { details } = props;
  return (
    <div
      className="flex flex-col items-center justify-center border border-CorrectBlack mx-2 p-2 relative h-"
      key={"detailsDevice" + details.id}
      onMouseOver={debounce(() => {
        console.log("mouse over");
        sethover(true);
      }, 100)}
      onMouseLeave={debounce(() => {
        sethover(false);
        console.log("mouse leave");
      }, 100)}
    >
      {details.percentOff ? (
        <div className=" bg-CorrectYellow absolute top-4 right-4 rounded-full h-12 w-12  font-bold flex items-center justify-center">
          {details.percentOff + "%"}
        </div>
      ) : (
        ""
      )}
      <img src={details.img} alt={details.name} className="pb-4" />
      <label className="pb-2 font-bold text-lg">{details.name}</label>
      <div className="flex items-center justify-center flex-col">
        {hover ? (
          <div className="flex flex-row items-center justify-evenly pb-6 pt-8 min-w-full">
            <div className="h-6 w-6 pr-2">
              <img src="/assets/whiteBag.png" alt="whiteBag" />
            </div>
            <div className="h-6 w-6 pr-2">
              <FiSearch size={18} color="black" />
            </div>
            <div className="h-6 w-6 pr-1">
              <img src="/assets/ico_hart.png" alt="favorite" />
              {/* <FiHeart size={22} color='black' /> */}
            </div>
          </div>
        ) : (
          <>
            <label className="pb-6">{details.header}</label>
            <label className="pb-4 ">{details.price}</label>
          </>
        )}
      </div>
    </div>
  );
};

function FourthPage(props) {
  return (
    <div
      className=" px-12  animate-secondPageBottomToTop fourth-page  flex items-center justify-start flex-col"
      style={{ height: "100vh", width: "100%" }}
    >
      <div className="mt-[10vh] ">
        <div className="flex flex-row items-center justify-between">
          <div className="font-bold text-lg">SPECIAL OFFER</div>
          <div className="text-sm">KITCHEN &nbsp; |&nbsp; TOOLS&nbsp; |&nbsp; CHILDREN'S CORNER</div>
        </div>
        <div className="flex flex-row items-center justify-evenly pt-12 ">
          {config.deviceList.map((devicedetails, key) => {
            return <DeviceDetails details={devicedetails} />;
          })}
        </div>
        <div className="font-medium flex items-center justify-center pt-8 hover:cursor-pointer">
          <label className="bg-CorrectYellow">REVIEW THE ENTIRE OFFER </label>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
