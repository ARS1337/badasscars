import React from "react";
import configs from "../config";
import Animations from "../utils/Animations";

const CarDetails = (props) => {
  const detailsClassList = `z-50 w-[50vw] md:w-full lg:w-full pt-0 md:pt-8 lg:pt-8 m-4 md:m-0 lg:m-0  flex align-middle justify-center flex-col  animate-bottomToTopCarDetails`;
  return (
    <li className={detailsClassList}>
      <div className="  border-CorrectBlack bg-newGrey">
        <img src="/assets/carDetails.png" alt="car details" />
      </div>
      <div className="border border-t-0 border-CorrectBlack bg-newGrey">
        <div className="flex align-middle justify-center font-oswald text-lg md:text-2xl lg:text-2xl py-4">
          {" "}
          {props.details.name}
        </div>
        <div className="flex align-middle justify-center font-oswald text-sm pb-2">
          <div className="px-2 bg-CorrectYellow text-sm md:text-lg lg:text-lg">1.390.00 KN</div>
        </div>
      </div>
    </li>
  );
};

function SecondPage(props) {
  const { animationDirection } = props;
  const mainClassList =
    "p-12 relative font-roboto w-screen h-full flex items-center justify-center   flex-col    " + animationDirection;
  return (
    <div className="second-page scroll-area h-[100vh] z-40 bg-newGrey w-screen">
      <div className={mainClassList} style={{ height: "95vh", width: "100vw" }}>
        <div
          className={
            " flex items-center justify-center font-oswald font-extrabold tracking-title z-10 pt-0  md:pt-16 lg:pt-16 text-center"
          }
        >
          THE BEST FROM THE OFFER
        </div>
        <div
          className={
            " flex items-center justify-center flex-row px-0 md:px-24 lg:px-24 sm:flex-row w-screen md:w-5/6 lg:w-5/6  z-50 h-5/6 md:h-1/2 lg:h-1/2 overflow-scroll md:overflow-hidden lg:overflow-hidden"
          }
        >
          {configs.carList.map((details) => (
            <ul key={details.id} className="px-0 md:px-2 lg:px-2 z-10">
              <CarDetails details={details} />
            </ul>
          ))}
        </div>
        <div
          className={
            " flex items-center justify-center font-oswald font-bold tracking-title z-50 hover:cursor-pointer pt-8 hover:opacity-50 text-center"
          }
        >
          REVIEW THE ENTIRE OFFER
        </div>

        <Animations
          key={12}
          height={0.05}
          width={0.05}
          positionTop={"70vh"}
          positionLeft={"10%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={13}
          height={0.09}
          width={0.09}
          positionTop={"15%"}
          positionLeft={"30%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={14}
          height={0.2}
          width={0.2}
          positionTop={"15vh"}
          positionLeft={"75%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
      </div>
    </div>
  );
}

export default SecondPage;
