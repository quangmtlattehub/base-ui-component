import React from "react";

function Airdrop() {
  return (
    <div className="container">
      <h1 className="md:text-[32px] text-2xl mt-20">Airdrop</h1>
      <div className="w-full relative md:mt-0 mt-10">
        <img
          src="/images/home/outer-circle.png"
          alt=""
          className="w-full z-[1] spinning-element-outer relative"
        />
        <img
          src="/images/home/center-circle.png"
          alt=""
          className="absolute inset-0 m-auto w-[75%] z-[1] spinning-element-center"
        />
        <div className="absolute inset-0 m-auto flex items-center justify-center w-[80%]">
          <div className=" blend-airdrop">
            <img src="/images/home/bg-center-airdrop.png" alt="" className="" />
          </div>
        </div>
        <img
          src="/images/home/logo-circle.png"
          alt=""
          className="absolute inset-0 m-auto z-[1] w-[20%]"
        />
      </div>
    </div>
  );
}

export default Airdrop;
