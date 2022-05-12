import React from "react";
import configs from "../config";
import Animations from "../utils/Animations";

const CarDetails = (props) => {
  const detailsClassList =
    `z-50 pt-8   flex align-middle justify-center flex-col  px-1 animate-bottomToTopCarDetails`;
  return (
    <div
      className={detailsClassList}
      onFocus={() => {
        console.log("focus");
      }}
    >
      <div className="  border-CorrectBlack bg-newGrey">
        <img src="/assets/carDetails.png" alt="car details" />
      </div>
      <div className="border border-t-0 border-CorrectBlack bg-newGrey">
        <div className="flex align-middle justify-center font-oswald text-2xl py-4"> {props.details.name}</div>
        <div className="flex align-middle justify-center font-oswald text-sm pb-4">
          <div className="px-2 bg-CorrectYellow">1.390.00 KN</div>
        </div>
      </div>
    </div>
  );
};

function SecondPage(props) {
  const { animationDirection } = props;
  const mainClassList =
    "p-12 relative font-roboto w-full h-full flex items-center justify-center flex-col pt-36  mb-12 " +
    animationDirection;
  return (
    <div className="second-page scroll-area h-[80vh] z-40 bg-newGrey">
      <div className={mainClassList} style={{ height: "95vh", width: "100vw" }}>
        <div className={" flex items-center justify-center font-oswald font-extrabold tracking-title z-10  pt-16 "}>
          THE BEST FROM THE OFFER
        </div>
        <div className={"flex items-center justify-center flex-col px-24 sm:flex-row w-5/6  z-50 "}>
          {configs.carList.map((details) => (
            <div key={details.id} className="px-2 z-10">
              <CarDetails details={details} />
            </div>
          ))}
        </div>
        <div
          className={
            " flex align-middle justify-center font-oswald font-bold tracking-title z-50 hover:cursor-pointer pt-8 hover:opacity-50 "
          }
        >
          REVIEW THE ENTIRE OFFER
        </div>

        <Animations
          key={12}
          height={40}
          width={40}
          positionTop={"70vh"}
          positionLeft={"10%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={13}
          height={150}
          width={150}
          positionTop={"20vh"}
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
    </div>
  );
}

export default SecondPage;
