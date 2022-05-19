import React from "react";
import configs from "../config";
import Animations from "../utils/Animations";

const CarDetails = (props) => {
  const detailsClassList = `shadow-xl z-50 w-[80vw] md:w-full lg:w-full pt-0 md:pt-8 lg:pt-8 m-4 md:m-0 lg:m-0  flex items-stretch justify-center flex-col  `;
  return (
    <li className={detailsClassList}>
      <div className="  border-CorrectBlack bg-newGrey">
        <img src="/assets/carDetails.png" alt="car details" />
      </div>
      <div className="border border-t-0 border-CorrectBlack bg-newGrey">
        <div className="flex align-middle justify-center font-oswald text-lg md:text-2xl lg:text-2xl py-4">
          {props.details.name}
        </div>
        <div className="flex align-middle justify-center font-oswald text-sm pb-2">
          <div className="px-2 bg-CorrectYellow font-oswald text-sm md:text-lg lg:text-lg">1.390.00 KN</div>
        </div>
      </div>
    </li>
  );
};

function SecondPage(props) {
  const { animationDirection } = props;
  const mainClassList =
    "p-12 relative font-roboto w-screen h-full flex items-center justify-center flex-col md:h-[95vh] lg:h-[95vh] " +
    animationDirection;
  return (
    <div className="second-page scroll-area h-full md:h-[100vh] lg:h-[100vh] z-40 bg-newGrey w-screen">
      <div className={mainClassList}>
        <div
          className={
            " text-xs md:text-2xl flex items-center justify-center font-oswald font-semibold z-10 pt-0  md:pt-16 lg:pt-16 text-center"
          }
        >
          THE BEST FROM THE OFFER
        </div>
        <div
          className={
            "  container md:container-none md:overflow-hidden lg:container-none w-[100vw] md:flex lg:flex md:items-center lg:items-center md:justify-center lg:justify-center md:flex-row lg:flex-row px-0 md:px-24 lg:px-24 sm:flex-row  md:w-5/6 lg:w-5/6  z-50 h-min md:h-2/3 lg:h-2/3 "
          }
        >
          {configs.carList.map((details) => (
            <ul key={details.id} className="py-0 px-0 md:px-2 lg:px-2 z-50">
              <CarDetails details={details} />
            </ul>
          ))}
        </div>
        <div
          className={
            "text-xs md:text-lg flex items-center justify-center font-oswald font-normal  z-30 hover:cursor-pointer pt-4 md:pt-8 lg:pt-8 hover:opacity-50 text-center"
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
