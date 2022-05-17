import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import Animations from "../utils/Animations";

const EmailInput = () => {
  return (
    <div className="relative w-full pb-4">
      <input
        type="email"
        size={"100"}
        placeholder="E mail"
        className="focus:outline-none pb-2 w-full bg-transparent border border-t-0 border-l-0 border-r-0 border-black mb-2 text-sm emailInput "
      />
      <button className="absolute right-1 bg-CorrectYellow">SEND</button>
    </div>
  );
};
const windowHeight = window.innerHeight;

function SeventhPage(props) {
  return (
    <div className="mb-24 px-1 md:px-12 md:pb-12 animate-secondPageBottomToTop seventh-page h-[235vh] md:h-[100vh] flex items-start md:block">
      <div>
        <div className=" mt-[15vh]  flex flex-col h-[80vh] md:h-[100vh]  justify-between relative">
          <div className="z-50">
            <img
              src="/assets/women.png"
              alt="women"
              className="absolute right-[0%] top-[5%] md:block  w-full md:w-6/12 md:-top-24 z-50 md:right-[45%] h-auto "
            />
          </div>

          {/* left container */}
          <div className="md:absolute z-40 md:top-0 border border-black md:border-0 mb-6 md:mb-0">
            <div className="absolute border-0 md:border border-black h-1/2 md:h-full w-full md:w-3/12 md:border-r-0 z-40 " />
            <div className="flex flex-col w-full md:w-1/2 p-2 md:p-12 ">
              <label className="font-bold md:text-2xl pb-2 md:pb-4 ">Send a gift certificate</label>
              <label className="text-2xl md:text-9xl font-bold pb-2 md:pb-4 whitespace-nowrap">to a friend</label>
              <label className="text-xs break-words pb-2 md:pb-4 w-1/2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </label>
              <label className="text-base font-bold">GIVE A VOUCHER!</label>
            </div>
          </div>

          {/* right container */}
          <div className="md:absolute  flex items-end z-40 bottom-0  right-0 pt-4 md:pt-0 border border-black md:border-0  ">
            <div className="absolute border-0 md:border bottom-0 border-black h-[100%] w-7/12 md:border-l-0 right-0 z-10 " />

            <div className=" w-full md:w-[90vw] h-full ">
              <div className="flex flex-col  items-end">
                <div className="p-8 flex items-center flex-col">
                  <h6 className="text-7xl font-bold flex align-middle justify-center tracking-title">BADASS</h6>
                  <h6 className="text-3xl font-bold tracking-spacing flex align-middle justify-center pl-3 ">SHOP</h6>
                  <div className="md:pt-8 md:pb-12 flex align-bottom flex-row justify-around w-36 z-40 mt-4 mb-8">
                    <div className="h-8 w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-2 hover:cursor-pointer hover:opacity-50">
                      <TiSocialFacebook />
                    </div>
                    <div className="h-8 w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-2 hover:cursor-pointer hover:opacity-50">
                      <FaInstagram />
                    </div>
                    <div className="h-auto w-8 rounded-full border border-[#74787B] flex align-middle justify-center pt-1 hover:cursor-pointer hover:opacity-50">
                      <img src="/assets/youtube.png" alt="youtube icon" className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:h-full w-full items-start justify-between  ">
                  <div className="flex flex-col font-semibold items-center md:items-start justify-end w-full md:w-3/12 pb-12 ">
                    <label className="text-lg pb-4 md:pb-8 font-bold">SUPPORT</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">PAYMENT METHODS</label>
                    <label className="text-xs tracking-[0.1rem] pb-3"> DELIVRY METHODS</label>
                    <label className="text-xs tracking-[0.1rem] pb-3"> RETURNS AND COMPLAINTS</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">WHOLESALE</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">PRIVACY POLICY</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">COOKIE POLICY</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">USER REGISTRATION</label>
                    <label className="text-xs tracking-[0.1rem] pb-3">TERMS OF USE</label>
                  </div>
                  <div className="flex  flex-col pt-6 md:pt-0  w-full md:w-2/12 items-center md:items-start justify-between pb-12">
                    <label className="text-lg font-bold pb-8">NEWSLETTER</label>
                    <label className="font-semibold text-xl md:text-2xl pb-5 text-center md:text-left">
                      {" "}
                      YOU WANT EXTRA DISCOUNTS?
                    </label>
                    <label className="text-xs pb-6">
                      Read more about the processing of your personal data on the{" "}
                      <a href="" className="font-bold">
                        PRIVACY POLICY
                      </a>{" "}
                      page.
                    </label>
                    <EmailInput />
                    <div className="flex flex-row items-center justify-between">
                      <div className=" bg-[#292F33] h-16 w-16 rounded-full flex items-center justify-center text-CorrectWhite mr-4">
                        10<sup>USD</sup>
                      </div>
                      <label className="w-10/12 text-left font-semibold">
                        Get a 10USD discount by subscribing to our MASOHIstic newsletter!
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col  h-full   w-full md:w-3/12 items-">
                    <div className="flex items-center flex-col p-12">
                      <div className="flex flex-col items-start pl-4">
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left ">
                          ABOUT US
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          BLOG
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          GENERAL CONDITIONS
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          BADASSSHOP CLUB
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          CONTACT
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          IMPRINT
                        </button>
                        <button className="pb-1 md:pb-4 md:w-full text-xs md:text-xs tracking-[0.1rem] font-bold text-left">
                          COMPLAINTS
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center bg-CorrectBlack text-CorrectWhite  flex-col w-full p-4">
                      <label className="text-left">Copyright 2019. All Rights Reserved</label>
                      <label className="text-left">Crafted with love by EA93</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:block">
          <Animations
            key={13}
            height={0.5}
            width={0.5}
            positionTop={"10vh"}
            positionLeft={"-8%"}
            animationClassList="animate-rotate animate-bounceCustom z-0"
          />
          <Animations
            key={12}
            height={windowHeight * 0.25}
            width={windowHeight * 0.25}
            positionTop={"-10vh"}
            positionLeft={"90%"}
            animationClassList="animate-rotate animate-bounceCustom z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default SeventhPage;
