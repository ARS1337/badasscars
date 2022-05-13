import React from "react";
import Animations from "../utils/Animations";

const windowHeight = window.innerHeight;

function SixthPage(props) {
  return (
    <div
      className="px-12 mt-[10vh] animate-secondPageBottomToTop  relative  sixth-page"
      style={{ height: "90vh", width: "100%" }}
    >
      <label className="font-bold text-xl ">FROM THE BLOG</label>
      <div className="flex flex-row mt-8 z-50 "  >
        <div className="flex flex-row border border-CorrectGrey w-8/12 pr-8 mr-4  justify-between items-stretch h-[60vh] z-50">
          <img src="/assets/wine.png" alt="from the blog, wine glass" className="w-[50%] md:w-[50%] lg:w-[100%] z-50" />
          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center ">
              <label className="text-3xl font-bold text-center pb-12">
                An ideal gift for wine lovers and collectors
              </label>
              <label className="text-xs text-center pb-12">
                If you choose wine by food, the basic rules say that white wines go well with fish, chicken, salads and
                pasta.
              </label>
              <label className="bg-CorrectYellow text-sm font-bold">FIND OUT MORE</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-4/12">
          <div className="flex flex-row border border-CorrectGrey mb-4 p-4 h-[29vh]">
            <img src="/assets/redCar.png" alt="red car" />
            <div className="flex flex-col">
            <label className="text-3xl font-bold  pb-8 break-words text-left ">An ideal gift for car lovers and collectors</label>
              <label className="text-xs text-left ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore
              </label>
            </div>
          </div>
          <div className="flex flex-row border border-CorrectGrey mb-4 p-4 h-[29vh]">
            <img src="/assets/carWhite.png" alt="red car" />
            <div className="flex flex-col pl-8">
              <label className="text-3xl font-bold  pb-12 break-words text-left ">An ideal gift for car lovers and collectors</label>
              <label className="text-xs text-left ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore
              </label>
            </div>
          </div>
        </div>
      </div>
      <Animations
        key={12}
        height={windowHeight * 0.35}
        width={windowHeight * 0.35}
        positionTop={"20%"}
        positionLeft={"1%"}
        animationClassList="animate-rotate animate-bounceCustom z-0"
      />
    </div>
  );
}

export default SixthPage;
