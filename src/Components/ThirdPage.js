import React from "react";
import Animations from "../utils/Animations";

function animateValue(start, end, duration) {
  setTimeout(() => {
    const obj = document.getElementById("value");
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, 800);
}
const FirstContainer = () => {
  return (
    <div className="h-full md:h-[60vh] lg:h-[60vh] flex flex-row min-h-full items-end justify-end w-full  relative font-oswald">
      <div className=" flex items-end pb-12 absolute  left-0 bottom-0">
        <img src="/assets/forklift.png" alt="forklift" height="50%" width="50%" />
      </div>
      <div className="h-full md:h-[60vh] lg:h-[60vh]  border border-l-0 border-black p-8 w-1/2">
        <div className="flex flex-col justify-between text-right  h-full">
          <div>
            <div className="pb-12 text-xl md:text-2xl font-bold">WHOLESALE USER?</div>
            <div>
              <div className=" text-md md:text-md lg:text-lg">
                Do you have a company and need to buy a larger quantity of products?
              </div>
              <div className=" text-md md:text-md lg:text-lg">
                Register and log in as a wholesale user and secure access to a special part of the store.
              </div>
            </div>
          </div>
          <div className="">
            <button className="font-semibold text-sm bg-CorrectYellow">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = () => {
  return (
    <div className="h-full md:h-[60vh] lg:h-[60vh] flex flex-col md:flex-row min-h-full items-start md:items-end justify-center w-full z-50 relative font-oswald">
      <div className="h-full md:h-[60vh] lg:h-[60vh]   border border-r-0 border-black p-8 w-full md:w-1/2 z-50">
        <div className="flex flex-col justify-between text-left w-full h-full z-50">
          <div className="flex items-stretch justify-between flex-col text-left  h-full z-50">
            <div className="pb-2 md:pb-16 lg:pb-24 text-xl font-bold flex flex-row items-center text-left z-50 test">
              <img src="/assets/Bag.png" alt="bag" className="pr-3 " />
              <label className="text-xl md:text-2xl">BADASS CLUB</label>
            </div>
            <div className=" flex items-start justify-center md:justify-between flex-col text-left  h-full">
              <div className="text-lg md:text-xl lg:text-2xl font-bold  text-left">JOIN OUR BENEFITS CLUB.</div>
              <div className="text-left text-md md:text-md lg:text-lg ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
              <button className="text-xs text-left font-oswald  font-semibold bg-CorrectYellow">FIND OUT MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:items-center lg:items-center  h-full w-full md:w-1/2 ">
        <div className=" font-extrabold text-4xl md:text-9xl lg:text-9xl rotateText md:rotateText lg:rotateText p-0 m-0 flex flex-row-reverse">
          <div id="value">948</div>
          <div>46.</div>
        </div>

        <div className="pb-8 font-bold text-right">Satisfied Customers!</div>
      </div>
    </div>
  );
};

function ThirdPage(props) {
  animateValue(958, 999, 1000);

  return (
    <div className=" third-page scroll-area pb-12 h-full md:pb-0 lg:pb-0 md:h-[100vh] lg:h-[100vh] flex flex-col items-center justify-center  z-50  ">
      <div className=" block md:flex lg:flex   items-center justify-center h-min w-screen pt-2 px-1 md:px-12 lg:px-12 md:pt-16 lg:pt-16 animate-secondPageBottomToTop">
        <div className="mb-8 md:mb-0 lg:mb-0 w-[95vw] md:w-1/2 lg:w-1/2 flex items-center justify-center pr-1 md:pr-4 lg:pr-4 z-10">
          <FirstContainer />
        </div>
        <div className="  w-[95vw] md:w-1/2 lg:w-1/2 flex items-center justify-center pl-1 md:pl-4 lg:pl-4 z-10">
          <SecondContainer />
        </div>
        <div>
          <div className="hidden md:block lg:block">
            <Animations
              key={34}
              height={0.2}
              width={0.2}
              positionTop={"35vh"}
              positionLeft={"5%"}
              animationClassList="animate-rotate animate-bounceCustom z-0"
            />
            <Animations
              key={32}
              height={0.1}
              width={0.1}
              positionTop={"15%"}
              positionLeft={"85%"}
              animationClassList="animate-rotate animate-bounceCustom z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
