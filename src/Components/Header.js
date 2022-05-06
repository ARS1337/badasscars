import React from "react";
import { Link } from "react-router-dom";
import configs from "../config";

function Header(props) {
  return (
    <div className="flex align-middle justify-between  pt-4 z-50">
      <div className="flex align-middle justify-center " style={{ alignItems: "center" }}>
        <select className=" bg-CorrectBlack px-8 text-white font-oswald shadow-lg p-2 z-50 hover:cursor-pointer">
          {configs?.listOfProducts.map((productName, key) => {
            return (
              <option value="PRODUCTS" defaultValue className="px-2 font-bold text-white font-oswald z-50" key={key}>
                {productName}
              </option>
            );
          })}
        </select>
        <button className="border-2 border-solid border-CorrectBlack p-1.5 ml-1 px-8 font-bold hover:cursor-pointer z-50">
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
            className="flex align-middle justify-center hover:cursor-pointer z-50"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B2B
          </div>
          <div
            className="flex align-middle justify-center hover:cursor-pointer z-50"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/SecondPage">CLICK & CONNECT</Link>
          </div>
          <div
            className=" grid grid-cols-2 hover:cursor-pointer z-50"
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
