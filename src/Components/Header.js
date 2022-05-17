import React from "react";
import { Link, useNavigate } from "react-router-dom";
import configs from "../config";
import { IoReorderThreeOutline } from "react-icons/io5";

function Header(props) {
  const { scaleInAnimation, bottomToTopAnimation } = props;
  const headerTitleClassList =
    "flex flex-col items-center justify-center order-1 md:order-2 lg:order-2 pb-2 md:pb-0 lg:pb-0 " + scaleInAnimation;
  const headerClassList =
    "flex items-middle justify-between  pt-4 z-50 flex-col md:flex-row lg:flex-row" + bottomToTopAnimation;

  return (
    <div className="bg-newGrey md:bg-transparent z-50 md:z-10">
      <div className="hidden md:block lg:block">
        <div className={headerClassList}>
          {/* md and lg */}
          <div className="flex items-center justify-evenly px-1 order-3 md:order-1 lg:order-1">
            <select className=" bg-CorrectBlack px-8 w-full  text-white font-oswald shadow-lg p-2 z-50 hover:cursor-pointer border-0">
              {configs?.listOfProducts.map((productName, key) => {
                return (
                  <option
                    value="PRODUCTS"
                    defaultValue
                    className="px-2 font-bold text-white font-oswald z-50"
                    key={key}
                  >
                    {productName}
                  </option>
                );
              })}
            </select>
            <button className="border-2 w-full border-solid border-CorrectBlack p-1.5 ml-1 px-8 font-bold hover:cursor-pointer z-50">
              CONTACT
            </button>
          </div>

          {/* md and lg */}
          <div className={headerTitleClassList}>
            <h6 className="text-4xl font-bold flex align-middle justify-center">BADASS</h6>
            <h6 className="text-md font-bold tracking-spacing flex align-middle justify-center pl-3">SHOP</h6>
          </div>

          {/* md and lg */}
          <div className="w-full md:w-1/4 lg:w-1/5 flex items-center justify-between font-bold order-2 md:order-3 lg:order-3 pb-2 md:pb-0 lg:pb-0 px-2">
            <button className="font-bold ">B2B</button>
            <button className="font-bold ">CLICK & CONNECT</button>
            <div className=" flex flex-row items-center justify-between">
              <div className=" mx-2">LOGIN</div>
              <img
                src="/assets/profile.jpg"
                className="inline-block h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 rounded-full ring-2 ring-CorrectBlack"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden lg:hidden pt-2 ">
      <div className={scaleInAnimation}>

        <div className="flex items-stretch justify-between px-2">
          <div className="order-2 hover:cursor-pointer relative flex justify-end">
            <select className=" bg-newGrey opacity-70  p-1 px-4 w-full  text-black text-sm font-oswald shadow-lg  z-50 hover:cursor-pointer border-0">
              <option value="B2B" className="px-2 font-bold text-black font-oswald z-50">
                B2B
              </option>
              <option value="B2B" className="px-2 font-bold text-black font-oswald z-50">
                CLICK & CONNECT
              </option>
              <option value="B2B" className="px-2 font-bold text-black font-oswald z-50">
                LOGIN
              </option>

            </select>
          </div>
          <div className={headerTitleClassList}>
            <h6 className="text-2xl  font-bold flex align-middle justify-center">BADASS</h6>
            <h6 className="text-xs  font-bold tracking-spacing flex align-middle justify-center pl-3">SHOP</h6>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
