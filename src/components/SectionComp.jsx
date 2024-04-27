import React from "react";
import IconContainer from "../../src/assets/IconContainer.svg";

const SectionComp = () => {
  return (
    <div className="text-center mt-[100px]">
      <h1 className="flex justify-center items-center mx-auto text-[48px] font-semibold leading-[150%] gap-3 border-[1px] border-[solid] border-[#FCFCFD] w-[805px] bg-[#FCFCFD] px-[20px] py-[14px] border-[1px] border-[solid] border-[#F1F1F3] rounded-lg">
        <img src={IconContainer} alt="" />
        <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
      </h1>
      <h2 className="text-[38px] font-medium leading-[150%] mt-5">
        with Online Design and Development Courses.
      </h2>
      <p className="text-[18px] font-normal mt-[10px] mb-[60px]">
        Learn from Industry Experts and Enhance Your Skills.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="bg-white rounded-lg px-[24px] py-[18px] border-[1px] border-[solid] border-[rgb(241,241,243)] hover:bg-[#FF9500] hover:text-white rounded-lg px-[24px] py-[14px]">
          Explore Courses
        </button>
        <button className="bg-white rounded-lg px-[24px] py-[18px] border-[1px] border-[solid] border-[rgb(241,241,243)] hover:bg-[#FF9500] hover:text-white rounded-lg px-[24px] py-[14px]">
          View Pricing
        </button>
      </div>
    </div>
  );
};

export default SectionComp;
