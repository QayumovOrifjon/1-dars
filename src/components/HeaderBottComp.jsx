import React from "react";
import SiteLogo from "../../src/assets/Logo.svg";

const HeaderBottComp = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center gap-11">
        <img src={SiteLogo} alt="" />
        <nav>
          <ul className="flex justify-between items-center gap-6">
            <li className="cursor-pointer hover:bg-[#F1F1F3] px-[18px] py-[14px] rounded-lg">
              Home
            </li>
            <li className="cursor-pointer hover:bg-[#F1F1F3] px-[18px] py-[14px] rounded-lg">
              Courses
            </li>
            <li className="cursor-pointer hover:bg-[#F1F1F3] px-[18px] py-[14px] rounded-lg">
              About Us
            </li>
            <li className="cursor-pointer hover:bg-[#F1F1F3] px-[18px] py-[14px] rounded-lg">
              Pricing
            </li>
            <li className="cursor-pointer hover:bg-[#F1F1F3] px-[18px] py-[14px] rounded-lg">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-3">
        <button className="hover:bg-[#FF9500] hover:text-white rounded-lg px-[24px] py-[14px]">
          Sign Up
        </button>
        <button className="hover:bg-[#FF9500] hover:text-white rounded-lg px-[24px] py-[14px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default HeaderBottComp;
