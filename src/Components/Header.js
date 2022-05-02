import React from "react";
import configs from "../config";

function Header(props) {
  return (
    <div className="flex align-middle justify-between  pt-4">
      <div className="flex align-middle justify-center " style={{ alignItems: "center" }}>
        <select className=" bg-CorrectBlack px-8 text-white font-oswald shadow-lg p-2">
          {configs?.listOfProducts.map((productName) => {
            return (
              <option value="PRODUCTS" selected className="px-2 font-bold text-white font-oswald ">
                {productName}
              </option>
            );
          })}
        </select>
        <button className="border-2 border-solid border-CorrectBlack p-1.5 ml-1 px-8 font-bold hover:cursor-pointer ">
          CONTACT
        </button>
      </div>
      <div className="grid grid-cols-1 ">
        <h6 className="text-4xl font-bold flex align-middle justify-center">BADASS</h6>
        <h6 className="text-md font-bold tracking-spacing flex align-middle justify-center pl-3">SHOP</h6>
      </div>

      <div className="grid grid-cols-1 font-bold ">
        <div className="grid grid-cols-3">
          <div
            className="flex align-middle justify-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B2B
          </div>
          <div
            className="flex align-middle justify-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CLICK & CONNECT
          </div>
          <div
            className=" grid grid-cols-2 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="px-4">LOGIN</div>
            <img
              src="/assets/profile.jpg"
              className="inline-block h-8 w-8 rounded-full ring-2 ring-CorrectBlack"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
