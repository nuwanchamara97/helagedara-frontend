import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 pt-[3rem]">
        <div className="border-2 border-sky-500 text-right">
          <p className="text-4xl font-bold">Unwind </p>
          <p className="font-bold">HOTEL BOOKING</p>
        </div>
        <div className="border-2 border-sky-500">2</div>
        <div className="border-2 border-sky-500">3</div>
        <div className="border-2 border-sky-500 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-6 text-[0.8rem] font-bold">
            <div className="border-2 border-sky-500  ">
              <p className="">HOME</p>
            </div>
            <div className="border-2 border-sky-500 ">
              <p>ABOUT</p>
            </div>
            <div className="border-2 border-sky-500">
             <h1>ROOMS</h1>
            </div>
            <div className="border-2 border-sky-500 ">
              <h1>RESTRO & BAR</h1>
            </div>
            <div className="border-2 border-sky-500">
              <h1>BLOG</h1>
            </div>
            <div className="border-2 border-sky-500">
              <h1>CONTACT</h1>
            </div>
          </div>
        </div>

        <div className="border-2 border-sky-500">6</div>
      </div>
    </div>
  );
}
