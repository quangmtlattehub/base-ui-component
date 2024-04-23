import React from "react";
import xstore from "../xstore";

function Footer() {
  return (
    <div className="container relative z-10">
      <img
        src="/images/common/bg-footer.png"
        alt="footer"
        className="inset-0 object-cover xl:block hidden"
      />
      <div className="xl:absolute xl:top-1/2 xl:-translate-y-1/2 mx-auto pl-10 pr-10 xl:pl-20   xl:pr-32 w-full mt-32 xl:mt-9 bg-gradient py-10 xl:py-0 xl:bg-none xl:rounded-none rounded-md">
        <div className="flex items-center gap-x-3">
          <img src="/images/logo.svg" alt="logo" />
          <div className="font-bold text-[29px]">Satochain</div>
        </div>
        <div className="flex items-start lg:flex-row flex-col lg:gap-y-0 gap-y-6 justify-between w-full mt-8">
          <div>
            <h3>Make Bitcoin Mass Adopt</h3>
            <div className="mt-6 font-normal text-base">
              Engage, collaborate, and connect with thousands of Satochainer
              globally
            </div>
          </div>
          <div className="flex items-center gap-x-[32px]">
            {xstore.page.footer.menuFooter.map((item, idx) => (
              <a
                target="_blank"
                href={item.url}
                key={idx}
                className="block social-footer w-[40px] h-[40px] rounded-[5px] flex items-center justify-center hover"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[20px] object-contain h-[20px]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-[50px] lg:mt-[110px] flex items-start lg:items-center justify-between text-sm font-medium lg:flex-row flex-col lg:gap-y-0 gap-y-4">
          <div>© 2024 Satochain. All right reserved</div>
          <div className="flex items-center gap-x-4">
            <div className="p-[10px] hover">Privacy policy</div>
            <div className="p-[10px] hover">Explorer</div>
            <div className="p-[10px] hover">Satochain Bounty Program</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
