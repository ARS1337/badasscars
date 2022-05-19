import React, { useEffect } from "react";
import Animations from "../utils/Animations";

function SixthPage(props) {
  useEffect(() => {
    let footerElem = document.getElementsByClassName("footer")[0];
    if (footerElem) {
      footerElem.style.animation = "bottomToTopFooterFinished 1s linear 1 reverse forwards";
    }
  }, []);

  return (
    <div className=" px-1 md:px-12 font-oswald  relative flex items-start md:items-center justify-center  sixth-page h-[120vh] md:h-[100vh] ">
      <div className="relative text-center md:text-left">
        <label className="font-bold text-xl lg:text-2xl ">FROM THE BLOG</label>
        <div className="flex flex-col md:flex-row mt-4 md:mt-8 z-50 ">
          <div className="flex flex-row border border-CorrectBlack border-r-white w-full md:w-7/12 md:pr-8 md:mr-4  justify-between items-stretch  z-50">
            <img
              src="/assets/wine.png"
              alt="from the blog, wine glass"
              className="h-auto w-[50%] md:w-[50%] lg:w-[70%] z-50"
            />
            <div className="flex items-center justify-center ">
              <div className="flex flex-col items-center justify-center ">
                <label className="text-xl md:text-3xl font-bold text-center pb-12">
                  An ideal gift for wine lovers and collectors
                </label>
                <label className=" text-left pb-12 text-md md:text-lg lg:text-lg">
                  If you choose wine by food, the basic rules say that white wines go well with fish, chicken, salads
                  and pasta.
                </label>
                <label className="bg-CorrectYellow text-sm font-bold mb-4">FIND OUT MORE</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch  ju w-5/12 mt-4 md:mt-0 mb-[40vh] md:mb-0">
            <div className="flex flex-row border border-CorrectBlack border-l-white mb-4 p-4   w-[98vw] md:w-full">
              <img src="/assets/redCar.png" alt="red car" className="w-[50%] md:w-[50%] lg:w-[60%] z-50" />
              <div className="flex flex-col">
                <label className="text-md md:text-xl lg:text-2xl font-bold leading-5  pb-2 md:pb-8 break-words text-left ">
                  An ideal gift for car lovers and collectors
                </label>
                <label className="text-md md:text-base lg:text-lg text-left ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore
                </label>
              </div>
            </div>
            <div className="flex flex-row border border-CorrectBlack border-l-white mt-4 p-4  w-[98vw] md:w-full">
              <img src="/assets/carWhite.png" alt="red car" className="w-[40%] md:w-[50%] lg:w-[60%] z-50" />
              <div className="flex flex-col pl-8">
                <label className="text-md md:text-xl lg:2xl font-bold leading-5  pb-2 md:pb-8 break-words text-left  ">
                  An ideal gift for car lovers and collectors
                </label>
                <label className="text-md md:text-base lg:text-lg text-left ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <div className="hidden md:block">
        <Animations
          key={12}
          height={0.3}
          width={0.3}
          positionTop={"20%"}
          positionLeft={"1%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
      </div>
    </div>
  );
}

export default SixthPage;
